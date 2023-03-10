require("dotenv").config();
const { Router } = require("express");
const router = Router();
const { API_KEY, API } = process.env;
const { Temperament } = require("../db.js");
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    const db = await Temperament.findAll();
    return res.json(db).status(200);
  } catch (e) {
    return res.json(e.message).status(409);
  }
});

module.exports = router;
