const countryRouter = require("express").Router();

const countryController = require("../controller/countryController");

countryRouter
  .route("/")
  .get(countryController.getAllCountry)
  .post(countryController.addOneCountry);
countryRouter
  .route("/:id")
  .delete(countryController.deleteOneCountry)
  .patch(countryController.updateOneCountry)
  .get(countryController.getOneCountry);

module.exports = countryRouter;
