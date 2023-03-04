const api = require("../config/axios");

class Controller {
  static async GetProvince(req, res) {
    try {
      const { data } = await api.get("/province");

      res.status(200).json(data.rajaongkir.results);
    } catch (err) {
      // console.log(err);
    }
  }

  static async GetCity(req, res) {
    try {
      const { data } = await api.get("/city");
      res.status(200).json(data.rajaongkir.results);
    } catch (err) {
      // res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async PostCost(req, res) {
    try {
      const { data } = await api.post("/cost", req.body);
      res.status(200).json(data.rajaongkir.results);
    } catch (err) {
      // res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
