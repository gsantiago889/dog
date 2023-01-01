
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const loadTemperaments = require("./utils/loadTemperaments");

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(process.env.PORT, () => {
    console.log(`listening at http://localhost:${process.env.PORT}`); // eslint-disable-line no-console
  });
  await loadTemperaments();
});
