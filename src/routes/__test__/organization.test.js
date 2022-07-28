const app = require('../../app')
const { Organization }= require('../../models')
const { Social_network}= require('../../models')
const request = require('supertest')
const { OrganizationNotFoundError, InvalidOrganizationIdParamError } = require('../../errors/organization-errors')




describe('GET /organizations/:id/public testing', () => {
   

  it('returns organization data', async () => {
  
    const reqParam = 1
    const organization = await Organization.findOne({
        where:{id: reqParam},
        include: Social_network
    })
    const response = await request(app).get(`/organizations/${reqParam}/public`)

    expect(response.status).toEqual(200);
    expect(response.body.organization.name).toEqual(organization.name);
  
  })

  it('returns organization not found error', async () => {
    const max = await Organization.max('id') 
    const reqParam = max +1
    const error = new OrganizationNotFoundError()
    try{
    const response = await request(app).get(`/organizations/${reqParam}/public`)
  }
  catch(err){
    
    expect(err).toEqual(error.code);
    expect(err).toBe(error);
  
  }
  })

  it('returns invalid param error', async () => {

    const reqParam = 'letters'
    const error = new InvalidOrganizationIdParamError()
    try{
    const response = await request(app).get(`/organizations/${reqParam}/public`)
  }
  catch(err){
    
    expect(err).toEqual(error.code);
    expect(err).toBe(error);
  
  }
  })

})