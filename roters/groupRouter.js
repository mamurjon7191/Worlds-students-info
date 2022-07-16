const groupRouter = require("express").Router();

const groupController = require("../controller/groupController");

groupRouter
  .route("/")
  .get(groupController.getAllGroup)
  .post(groupController.addOneGroup);
groupRouter
  .route("/:id")
  .delete(groupController.deleteOneGroup)
  .patch(groupController.updateOneGroup)
  .get(groupController.getOneGroup);

module.exports = groupRouter;
