const router = require("express").Router();
const productsController = require("../../controllers/userProductsController");

// Matches with "/api/userProducts"
router.route("/")
  .get(userProductsController.findAll)
  .post(userProductsController.create);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(userProductsController.findById)
  .put(userProductsController.update)
  .delete(userProductsController.remove);

module.exports = router;