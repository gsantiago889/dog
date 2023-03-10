const { Dog, Temperament, conn } = require("../../src/db");
const { expect } = require("chai");

describe("Model Testing", function () {
  describe("Dog model", function () {
    beforeEach(async function () {
      await Dog.sync({ force: true });
    });
    describe("Validations", function () {
      it("No deberia crearse si no recibe todos los datos", (done) => {
        Dog.create({
          name: "Pichichu",
        })
          .then(() => done("No se creó"))
          .catch(() => done());
      });
    });
  });
  describe("Temperament model", function () {
    beforeEach(async function () {
      await Temperament.sync({ force: true });
    });
    it("No debería crearlo si no recibe un name", (done) => {
      Temperament.create({ id: "122333434" })
        .then(() => done(new Error("La propiedad name es obligatoria")))
        .catch(() => done());
    });
    it("Name deberia ser un STRING", function () {
      expect(typeof Temperament.name).equal("string");
    });
  });
});
