const studentRouter = require("express").Router();

const studentController = require("../controller/studentController");

studentRouter
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.addOneStudent);
studentRouter
  .route("/:id")
  .delete(studentController.deleteOneStudent)
  .patch(studentController.updateOneStudent)
  .get(studentController.getOneStudent);

module.exports = studentRouter;
