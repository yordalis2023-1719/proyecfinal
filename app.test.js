const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("responde con Hola Mundo", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hola Mundo/);
  });
});

