const districtRouter = require("express").Router();

const districtController = require("../controller/districtController");

districtRouter
  .route("/")
  .get(districtController.getAllDistrict)
  .post(districtController.addOneDistrict);
districtRouter
  .route("/:id")
  .delete(districtController.deleteOneDistrict)
  .patch(districtController.updateOneDistrict)
  .get(districtController.getOneDistrict);

module.exports = districtRouter;
