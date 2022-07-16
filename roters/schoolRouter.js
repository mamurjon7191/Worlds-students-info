const schoolRouter = require("express").Router();

const schoolController = require("../controller/schoolController");

schoolRouter
  .route("/")
  .get(schoolController.getAllSchool)
  .post(schoolController.addOneSchool);
schoolRouter
  .route("/:id")
  .delete(schoolController.deleteOneSchool)
  .patch(schoolController.updateOneSchool)
  .get(schoolController.getOneSchool);

module.exports = schoolRouter;
