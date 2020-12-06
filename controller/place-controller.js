const Place = require("../model/places-model");

module.exports = {
  all(req, res, next) {
    Place.find({})
      .then(Places => res.send(Places))
      .catch(next);
  },
  get(req, res, next) {
    const placeId = req.params.id;
    Place.findById({ _id: placeId }).then(place => {
      res.send(place);
    });
  },

  create(req, res, next) {
    // next from middelware
    const PlaceProps = req.body;
    Place.create(PlaceProps)
      .then(Place => res.send(Place)) // 200 to user
      .catch(next); // if error send to next middle ware
  },

  edit(req, res, next) {
    const PlaceId = req.params.id;
    const PlaceProps = req.body;
    // get user and update
    Place.findByIdAndUpdate({ _id: PlaceId }, PlaceProps)
      // if success get user after updated
      .then(() => Place.findById({ _id: PlaceId }))
      //if you get user send it
      .then(Place => res.send(Place))
      //else send to middle
      .catch(next);
  },

  delete(req, res, next) {
    const PlaceId = req.params.id;
    Place.findByIdAndRemove({ _id: PlaceId })
      // in case is removed return 204 abject?
      .then(Place => res.status(204).send(Place))
      .catch(next);
  },
};
