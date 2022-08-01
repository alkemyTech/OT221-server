const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const path = require('path');
const { User } = require('../models');
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

const saveUser = async () => {
    const user = User.build({
        "firstName": "Jasmine",
        "lastName": "Chellam",
        "email": "jchellam0@cbsnews.com",
        "password": "lJGRQsZ9Pnx",
        "image": "8cee83bafdb828b1af7bbf669e09deb2",
        "roleId": 2,
        "createdAt": "2022-01-20 21:45:33",
        "updatedAt": "2022-03-12 13:11:07"
    })
    await user.save();
    return user;
};

describe('GET /users testing', () => {
    it('returns a paginated list of users', async () => {
        const token = login();
        const resp = await request(app)
            .get('/users?page=1')
            .set('Authorization', 'bearer ' + token)
            .expect(200)

        expect(resp.body.users).not.toBeUndefined();
    })
    it('can only be accessed if the user is logged as an admin', async () => {
        const resp = await request(app)
            .get('/users?page=1')
            .expect(401)
    })
})

describe('PUT /users/updateProfile testing', () => {
    it('updates a User', async () => {
        const user = await saveUser()
        const updateResponse = await request(app)
            .put('/users/updateProfile')
            .send({
                firstName:"new firstName",
                lastName: "new lastName",
                email: "new email",
                id: user.id
            })
            .expect(200)
    })
    it('returns an error if a file is attached and its not an image', async () => {
        const user = await saveUser()
        const filePath = path.join(__dirname, './test-data/text.txt');
        const updateResponse = await request(app)
            .put('/users/updateProfile')
            .type('form')
            .field('id', user.id)
            .attach('image', filePath)
            .expect(400)

            expect( updateResponse.body.error[0].msg ).toBe('El archivo debe ser una imagen.')
    })
    it('returns an error indicating that the id does not exist', async () => {
        const user = await saveUser()
        const updateResponse = await request(app)
            .put('/users/updateProfile')
            .send({
                firstName:"new firstName",
                lastName: "new lastName",
                email: "new email",
                id: user.id + 1
            })
            .expect(400)
        expect( updateResponse.body.message).toBe("No se encontró al usuario")
    })
})

describe('PUT /users/update testing', () => {
    it('updates a User', async () => {
        const user = await saveUser()
        const token = login();
        const updateResponse = await request(app)
            .put('/users/update')
            .set('Authorization', 'bearer ' + token)
            .send({
                firstName:"new firstName",
                lastName: "new lastName",
                email: "new email",
                id: user.id
            })
            .expect(200)
    })
    it('returns an error indicating that the id does not exist', async () => {
        const user = await saveUser()
        const token = login();
        const updateResponse = await request(app)
            .put('/users/update')
            .set('Authorization', 'bearer ' + token)
            .send({
                firstName:"new firstName",
                lastName: "new lastName",
                email: "new email",
                id: user.id + 1
            })
            .expect(400)
        expect( updateResponse.body.message).toBe("No se encontró al usuario")
    })
    it('can only be accessed if the user is logged as an admin', async () => {
        const user = await saveUser()
        const updateResponse = await request(app)
            .put('/users/update')
            .send({
                firstName:"new firstName",
                lastName: "new lastName",
                email: "new email",
                id: user.id
            })
            .expect(401)
    })
})

describe('DELETE /users/deleteProfile testing', () => {
    it('deletes a User', async () => {
        const user = await saveUser()
        const deleteResponse = await request(app)
            .delete(`/users/deleteProfile/${user.id}`)
            .expect(200)
    })
    it('returns an error indicating that the id does not exist', async () => {
        const user = await saveUser()
        const deleteResponse = await request(app)
            .delete(`/users/deleteProfile/${user.id+1}`)
            .expect(400)
        expect( deleteResponse.body.message).toBe("No se encontró al usuario")
    })
})

describe('DELETE /users/delete testing', () => {
    it('deletes a User', async () => {
        const user = await saveUser()
        const token = login();
        const deleteResponse = await request(app)
            .delete(`/users/delete/${user.id}`)
            .set('Authorization', 'bearer ' + token)
            .expect(200)
    })
    it('returns an error indicating that the id does not exist', async () => {
        const user = await saveUser()
        const token = login();
        const deleteResponse = await request(app)
            .delete(`/users/delete/${user.id+1}`)
            .set('Authorization', 'bearer ' + token)
            .expect(400)
        expect( deleteResponse.body.message).toBe("No se encontró al usuario")
    })
    it('can only be accessed if the user is logged as an admin', async () => {
        const user = await saveUser()
        const deleteResponse = await request(app)
            .delete(`/users/delete/${user.id}`)
            .expect(401)
    })
})