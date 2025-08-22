const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("Debe responder con Hola Mundo CI/CD 🚀", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola Mundo CI/CD 🚀");
  });
});
