const request = require("supertest");
const app = require("../app");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();

beforeEach(async () => {
  //Here I'm deleting the test email so it can be posted at the register of a user, otherwise, it will appear as an already taken email
  await User.destroy({ where: { email: "admintest@gmail.com" } });
});

describe("POST /auth/login", () => {
  test("should respond with a 200 status code and a json with user info plus accesstoken", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ email: "admin@gmail.com", password: "admin1234" });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    //Making sure a password is not beeing sent
    expect(response.body.user.password).toBe(undefined);
    expect(response.body.accessToken).not.toBe(undefined);
    const { dataValues } = jwt.verify(
      response.body.accessToken,
      process.env.SECRET_JWT_SEED
    );
    //At the following line, I'm checking if the access Token sent matches the user id to ensure token integrity and make sure it has the correct user data

    expect(response.body.user.id).toEqual(dataValues.id);
    expect(response.body.user).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        roleId: expect.any(Number),
        lastName: expect.any(String),
        firstName: expect.any(String),
        email: expect.any(String),
      })
    );
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a 400 if fields are not sent or are invalid", async () => {
    const bodyData = [
      { email: "admingmail.com" },
      { email: "admin@gmail.com" },
      { password: "admin1234" },
      { password: "" },
      {},
    ];
    for (const body of bodyData) {
      const response = await request(app).post("/auth/login").send(body);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(response.statusCode).toBe(400);
    }
  });

  test("should respond with a 400 and an error if password is incorrect", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ email: "admin@gmail.com", password: "admin123" });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(response.body["name"]).toEqual(
      expect.stringContaining("WrongPassword")
    );
    expect(response.statusCode).toBe(400);
  });

  test("should respond with a 400 and an error if email does not exists ", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ email: "adminnon@gmail.com", password: "admin1234" });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(response.body["name"]).toEqual(
      expect.stringContaining("UserNotFoundError")
    );
    expect(response.statusCode).toBe(400);
  });
});

describe("POST /auth/register", () => {
  test("should respond with a 200 status code and a json with user info plus accesstoken", async () => {
    const response = await request(app).post("/auth/register").send({
      firstName: "Rodri",
      lastName: "Valdi",
      email: "admintest@gmail.com",
      password: "admin1234",
    });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    //Making sure a password is not beeing sent
    expect(response.body.user.password).toBe(undefined);
    expect(response.body.accessToken).not.toBe(undefined);
    const { dataValues } = jwt.verify(
      response.body.accessToken,
      process.env.SECRET_JWT_SEED
    );
    expect(response.body.user.id).toEqual(dataValues.id);
    expect(response.body.user).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        roleId: expect.any(Number),
        lastName: expect.any(String),
        firstName: expect.any(String),
        email: expect.any(String),
      })
    );
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a 406 and an error if there are missing or wrong fields", async () => {

    //Sending multiple wrong objects to ensure errors are sent
    const bodyData = [
      { email: "admingmail.com" },
      { email: "" },
      {
        firstName: "Rodri",
        lastName: "Valdi",
        email: "admigmail.com",
        password: "admi",
      },
      { email: "admin@gmail.com" },
      { password: "admin1234" },
      { password: "" },
      {},
    ];

    for (const body of bodyData) {
      const response = await request(app).post("/auth/register").send(body);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(response.body).toEqual(
        expect.objectContaining({
          name: "RegisterValidationError",
          validationErrors: expect.any(Object),
          message: "Error de validacion",
        })
      );
      expect(response.statusCode).toBe(406);
    }
  });

  test("should respond with a 400 status code when an email thats already taken is sent", async () => {
    const response = await request(app).post("/auth/register").send({
      firstName: "Rodri",
      lastName: "Valdi",
      email: "admin@gmail.com",
      password: "admin1234",
    });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(response.body["name"]).toEqual(
      expect.stringContaining("CredentialsTakenError")
    );

    expect(response.statusCode).toBe(400);
  });
});
