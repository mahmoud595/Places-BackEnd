// const app = require(app)
const placeController = require("../controller/place-controller");
module.exports = app => {
  app.get("/api/places", placeController.all);

  app.get("/api/places/:id", placeController.get);

  app.post("/api/places", placeController.create);

  app.put("/api/places/:id", placeController.edit);
  //
  app.delete("/api/places/:id", placeController.delete);
};
