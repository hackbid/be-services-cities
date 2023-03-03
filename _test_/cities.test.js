const request = require("supertest");
const app = require("../app");

describe("Testing connect to 3party raja ongkir", () => {
  it("GET /province", async () => {
    const response = await request(app).get("/province");
    expect(response.status).toBe(200);
  });
  it("GET /city", async () => {
    const response = await request(app).get("/city");
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty("city_id", "1");
    expect(response.body[0]).toHaveProperty("province_id", "21");
    expect(response.body[0]).toHaveProperty(
      "province",
      "Nanggroe Aceh Darussalam (NAD)"
    );
    expect(response.body[0]).toHaveProperty("type", "Kabupaten");
    expect(response.body[0]).toHaveProperty("city_name", "Aceh Barat");
    expect(response.body[0]).toHaveProperty("postal_code", "23681");
  });
  it("POST /cost", () => {
    return request(app)
      .post("/cost")
      .send({
        origin: 160,
        destination: 476,
        weight: 2000,
        courier: "jne",
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body[0]).toHaveProperty("code", "jne");
        expect(response.body[0]).toHaveProperty("name", "Jalur Nugraha Ekakurir (JNE)");
        expect(response.body[0].costs[0]).toHaveProperty("service", "OKE");
        expect(response.body[0].costs[0]).toHaveProperty("description", "Ongkos Kirim Ekonomis");
        expect(response.body[0].costs[0].cost[0]).toHaveProperty("value",34000);
        expect(response.body[0].costs[0].cost[0]).toHaveProperty("etd",'3-6');
        expect(response.body[0].costs[0].cost[0]).toHaveProperty("note","");
        expect(response.body[0].costs[1]).toHaveProperty("service","REG");
        expect(response.body[0].costs[1]).toHaveProperty("description","Layanan Reguler");
        expect(response.body[0].costs[1].cost[0]).toHaveProperty("value",38000);
        expect(response.body[0].costs[1].cost[0]).toHaveProperty("etd",'2-3');
        expect(response.body[0].costs[1].cost[0]).toHaveProperty("note","");
      });
  });
});
