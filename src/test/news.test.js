const request   = require('supertest');
const app       = require('../app');
const jwt       = require('jsonwebtoken');
const path      = require('path');
const { Entry } = require('../models');
require('dotenv').config();

const login = () => {
  const payload = {
    dataValues: {
      roleId: 1,
      email: 'test@test.com'
    }
  }

  const token = jwt.sign(payload, process.env.SECRET_JWT_SEED);
  return token
}

const createEntry = async(name) => {
  await Entry.destroy({where:{}});
  const token    = login();
  const filePath = path.join(__dirname, './test-data/image.jpg');
  const response = await request(app)
      .post('/news')
      .set('Authorization', 'bearer ' + token)
      .field('name', name)
      .field('content', 'This is a test content')
      .attach('image', filePath)

  return response
}


describe('POST /news testing', () => {

  it('can only be accessed if the user is signed in as an admin', async() => {
    await request(app)
    .post('/news')
    .send({})
    .expect(401)
  })
  
  it('returns an error if an invalid name or content is provided', async() => {
    const token = login();
  
    const resp  = await request(app)
        .post('/news')
        .set('Authorization', 'bearer ' + token)
        .send({
            name:'',
            content: ''
        })
        .expect(400)
  
    expect(resp.body.errors[0].msg).toBe('name field is required');
    expect(resp.body.errors[1].msg).toBe('content field is required');
  })

  it('returns an error if a file is attached and its not an image', async() => {
    const token    = login();
    const filePath = path.join(__dirname, './test-data/word.docx');

    const resp = await request(app)
        .post('/news')
        .type('form')
        .set('Authorization', 'bearer ' + token)
        .field('name', 'This is a test name')
        .field('content', 'This is a test content')
        .attach('image', filePath)
        .expect(400)

    expect( resp.body.error[0].msg ).toBe('El archivo debe ser una imagen.')

  })

  it('creates an entry with valid inputs', async() => {
    const response = await createEntry('This is a test name');
    expect(response.status).toBe(201);
  })

})

describe('GET /news testing', () => {

  it('returns an object with an entries property', async() => {
    const resp = await request(app)
    .get('/news')
    .expect(200)
  
    expect(resp.body.entries).not.toBeUndefined();
  })

  it('returns an entry idetified by id', async() => {

    const name     = 'This is a test name';
    const response = await createEntry(name);

    const { id } = response.body.entry;     
    const getResponse = await request(app)
      .get(`/news/${ id }`)

    expect( getResponse.body.payload.name ).toBe(name); 

  })

  it('returns an error message if the entry  does not exist', async()=> {

    const response = await createEntry('This is a test name');

    const { id }   = response.body.entry; 
    const getResponse = await request(app)
      .get(`/news/${ id + 1 }`)               // Forces an incorrect id

    expect(getResponse.status).toBe(400);
    expect(getResponse.body.message).toBe('La novedad no existe')

  })

  it('returns paginated data and info about number of records and pages', async() => {

    await Entry.destroy({where:{}});
    const token = login();
    const name = 'This is a test name';
    const filePath = path.join(__dirname, './test-data/image.jpg');

    for(let i = 0; i < 3; i++){           // it creates 3 records
      await request(app)
        .post('/news')
        .set('Authorization', 'bearer ' + token)
        .field('name', name)
        .field('content', 'This is a test content')
        .attach('image', filePath)
    }

    const response = await request(app)
        .get('/news/2/1')                 // two records per page, first page

    expect(response.body.entries.result.length).toBe(2);
    expect(response.body.entries.count).toBe(3);
    expect(response.body.entries.pages).toBe(2);

  })

})

describe('DELETE /news testing', ()=>{

  it('can only be accessed if the user is signed in as an admin', async() => {
    await request(app)
    .delete('/news/1')
    .expect(401)
  })
  
  it('returns an error message if the entry you want to delete does not exist', async()=> {

    const response = await createEntry('This is a test name');

    const token    = login();
    const { id }   = response.body.entry; 
    const deleteResponse = await request(app)
      .delete(`/news/${ id + 1 }`)               // Forces an incorrect id
      .set('Authorization', 'bearer ' + token)

    expect(deleteResponse.status).toBe(400);
    expect(deleteResponse.body.message).toBe('La entrada no existe!!!')

  })

  it('deletes the entry if the id exist', async() => {
    
    const token    = login();
    const name     = 'This is a test name';
    const response = await createEntry( name );

    const { id } = response.body.entry; 
    const deleteResponse = await request(app)
      .delete(`/news/${ id }`) 
      .set('Authorization', 'bearer ' + token)

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.deleted.name).toBe(name)
    
  } )
 })

describe('PUT /news testing', () => {

  it('can only be accessed if the user is signed in as an admin', async() => {
    await request(app)
    .put('/news/1')
    .expect(401)
  })

   it('returns an error message if the entry you want to update does not exist', async()=> {

    const token    = login();
    const response = await createEntry('This is a test name');

    const { id } = response.body.entry; 
    const updateResponse = await request(app)
      .put(`/news/${ id + 1 }`)               // Forces an incorrect id
      .set('Authorization', 'bearer ' + token)

    expect(updateResponse.status).toBe(400);
    expect(updateResponse.body.message).toBe('La novedad no existe')

  })

   it('updates the entry if the id exist', async() => {
    
    const token       = login();
    const updatedName = 'This is an updated name'

    const response    = await createEntry('This is a test name');

    const { id } = response.body.entry; 
    const updateResponse = await request(app)
      .put(`/news/${ id }`) 
      .set('Authorization', 'bearer ' + token)
      .send({
        name: updatedName,
        content: ''
    })

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.entry.name).toBe(updatedName)
    
  } )

})

