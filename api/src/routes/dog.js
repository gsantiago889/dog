const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const { Dog } = require("../db.js");
require("dotenv").config();
const { Sequelize, UUID, where } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
//const { Where } = require("sequelize/types/utils.js");

router.post("/", async (req, res, next) => {
  const { name, height, weight, life_span, temperaments } = req.body;
  console.log(temperaments);

  if (!name || !height || !weight || !life_span || temperaments.length === 0) {
    console.log(
      "no se cargaron todos los campos, verifique, no se guardo en la base de datos"
    );
    res
      .status(500)
      .send(
        "no se cargaron todos los campos, verifique, no se guardo en la base de datos"
      );

    res.status(418).send("Soy una tetera");
    console.log("soy una tetera");
    return;
      }  
    }
);
module.exports = router;