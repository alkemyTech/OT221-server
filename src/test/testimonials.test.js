const app = require('../app');
const request = require('supertest');
const { InvalidTokenError, ExpiredTokenError } = require('../errors/auth-errors');
const URL_BASE = '/testimonials'
let nextTestimonialDeleted;
async function login(user) {
    const login = await request(app).post('/auth/login').send(user);
    return { token: login.body.accessToken, userId: login.body.user.id };
}

const userStandard = {
    email: 'jchellam0@cbsnews.com',
    password: 'lJGRQsZ9Pnx'
};

const userAdmin = {
    email: 'mpeakj@ask.com',
    password: '8i9R6MX'
};

describe('GET /testimonials', () => {


    describe('GET FAILS', () => {


        describe('get  /testimonials', () => {
            test('I expect a statusCode 500 not passing as a parameter the limit and the page', async () => {
                const response = await request(app).get(`${URL_BASE}`).send();
                expect(response.statusCode).toBe(500);
            });
        });

        //antes de correr este test comentar las el array de seeders de testimonials y correr npm run db_complete para que no haya testimonios
        //ya que yo espero que pase si no hay testimonios
        // describe('get  /testimonials/:limit/:page', () => {
        //     test('I expect a statusCode 400 if there are no testimonials', async () => {
        //         const response = await request(app).get(`${URL_BASE}/10/1`).send();
        //         expect(response.statusCode).toBe(400)
        //     })

        //     test('should response with an object', async () => {
        //         const response = await request(app).get(`${URL_BASE}/10/1').send();
        //         expect(response.body).toBeInstanceOf(Object);
        //         expect(response.body).toEqual({
        //             name: "TestimonialsTableEmptyError",
        //             message: "No hay testimonios",
        //             code: 400
        //         });
        //     });
        // });

    });

    describe('get /testimonials/:limit/:page', () => {
        test('I expect a status code 200', async () => {
            const response = await request(app).get(`${URL_BASE}/10/1`).send();
            expect(response.statusCode).toBe(200)
        });

        test('should response with an object', async () => {
            const response = await request(app).get(`${URL_BASE}/10/1`).send();
            //TYPEOF  RESPONSE
            expect(response.body).toBeInstanceOf(Object);

            //PROPERTY OBJECT
            expect(response.body.total_testimonials).toBeDefined()
            expect(typeof response.body.total_testimonials).toBe('number')

            expect(response.body.testimonials).toBeDefined()
            expect(Array.isArray(response.body.testimonials)).toBe(true)

            expect(response.body.pageCount).toBeDefined()
            expect(typeof response.body.pageCount).toBe('number')
        });
    })
})

describe('DELETE /testimonials/:id', () => {

    describe('FAILS DELETE AUTHORIZATION /testimonials/:id', () => {
        test('without the authorization property', async () => {
            const response = await request(app).delete(`${URL_BASE}/1`).send();
            expect(response.statusCode).toBe(401);
            expect(response.body.ok).toBe(false);
            expect(response.body.error).toBe('No token attached')
        })

        test('with the authorization property and the property equal to an empty string', async () => {
            const response = await request(app).delete(`${URL_BASE}/1`).set('Authorization', "").send();
            expect(response.statusCode).toBe(401);
            expect(response.body.ok).toBe(false);
            expect(response.body.error).toBe('No token attached')
        })

        test('without the standard word for the bearer token', async () => {
            const token = 'sdadafadadada'
            const response = await request(app).delete(`${URL_BASE}/1`).send('Authorization', `${token}`);
            expect(response.statusCode).toBe(401);
            expect(response.body.ok).toBe(false);
            expect(response.body.error).toBe('No token attached')
        })

        test('invalid token', async () => {
            const token = 'sadsadadaddsad'
            const response = await request(app).delete(`${URL_BASE}/1`).set('Authorization', `Bearer ${token}`).send();
            expect(response.statusCode).toBe(401);
            expect(response.body.ok).toBe(false);
            expect(response.body.error).toBe('Not a valid token')
        })


        test('valid token but not admin user', async () => {

            const { token } = await login(userStandard)

            const response = await request(app).delete(`${URL_BASE}/1`).set('Authorization', `Bearer ${token}`).send();
            expect(response.statusCode).toBe(401);
            expect(response.body.ok).toBe(false);
            expect(response.body.error).toBe('Not authorized');
        })

        test("admin user's valid token and id INVALID", async () => {
            //testimonial ID
            const id = 10000 //INVALID ID        
            const error = new Error('El testimonio que desea eliminar no existe')

            const { token } = await login(userAdmin)

            const response = await request(app).delete(`${URL_BASE}/${id}`).set('Authorization', `Bearer ${token}`).send();
            expect(response.statusCode).toBe(500)
            expect(response.body).toEqual(error.message);
        })

    })

    describe('creation of testimonials POST /testimonias', () => {

        describe('AUTHENTICATION TO CREATE TESTIMONIAL', () => {

            test('creation of testimonials without token', async () => {
                const token = ""
                const error = new InvalidTokenError;
                const response = await request(app).post(`${URL_BASE}`).set('Authorization', `Bearer ${token}`).send({});

                expect(response.statusCode).toBe(error.code)
                expect(response.body.name).toBe(error.name);
                expect(response.body.message).toBe(error.message);
                expect(response.body.code).toBe(error.code);
            })


            test('creation of testimonials with invalid token', async () => {
                const token = "unTokenInvalido"
                const error = new ExpiredTokenError;
                const response = await request(app).post(`${URL_BASE}`).set('Authorization', `Bearer ${token}`).send({});

                expect(response.statusCode).toBe(error.code)
                expect(response.body.name).toBe(error.name);
                expect(response.body.message).toBe(error.message);
                expect(response.body.code).toBe(error.code);
            })
        })

        describe('FIELD VALIDATION ERRORS', () => {

            test('creation of testimonials with valid token and errors validation fields', async () => {

                const { token, userId } = await login(userStandard)
                const testimonial = {
                    name: "",
                    content: "",
                    image: "",
                    userId: userId
                }
                const response = await request(app).post(`${URL_BASE}`).set('Authorization', `Bearer ${token}`).send(testimonial);

                expect(response.statusCode).toBe(400)
                expect(response.body).toBeDefined()
                expect(Array.isArray(response.body.errors)).toBeDefined()
                expect(Array.isArray(response.body.errors)).toBe(true)
                //errors name
                expect(response.body.errors).toEqual([
                    {
                        "value": "",
                        "msg": "The name field can't be empty",
                        "param": "name",
                        "location": "body"
                    },
                    {
                        "value": "",
                        "msg": "The name field must at least be 2 characters long",
                        "param": "name",
                        "location": "body"
                    },
                    {
                        "value": "",
                        "msg": "The content field can't be empty",
                        "param": "content",
                        "location": "body"
                    },
                    {
                        "value": "",
                        "msg": "The content field must at least be 10 characters long",
                        "param": "content",
                        "location": "body"
                    }
                ])
            })
        })

        describe('SUCCESSFUL TESTIMONIAL ', () => {

            test('creation testimonial', async () => {
                const { token, userId } = await login(userStandard)

                const testimonial = {
                    name: "nuevo testimonio",
                    content: "descripción del nuevo testimonio",
                    image: "key de imagen",
                    userId: userId
                }
                const response = await request(app).post(`${URL_BASE}`).set('Authorization', `Bearer ${token}`).send(testimonial);
                nextTestimonialDeleted = response.body.id

                expect(response.statusCode).toBe(201)
                expect(response.body).toBeDefined()
                expect(response.body.name).toEqual(testimonial.name)
                expect(response.body.content).toEqual(testimonial.content)
                expect(response.body.userId).toEqual(testimonial.userId)
            })
        })

    })


    describe('SUCCESS DELETE AUTHORIZATION /testimonials/:id', () => {

        test("admin user's valid token and id VALID", async () => {
            //testimonial ID
            const id = nextTestimonialDeleted//VALID ID
            const { token } = await login(userAdmin)

            const response = await request(app).delete(`${URL_BASE}/${id}`).set('Authorization', `Bearer ${token}`).send();

            expect(response.statusCode).toBe(200)
            expect(response.body).toBeDefined()
            expect(response.body.deletedTestimonial).toBe(1)
        })


    })
})

