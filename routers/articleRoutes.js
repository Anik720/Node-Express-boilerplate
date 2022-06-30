const express = require("express");

const router = express.Router();

const articleController = require("../controllers/articleController");

const authController = require('../controllers/authController');
const protect = require('../middlewares/protect');
const restrictTo = require('../middlewares/restrictTo');


 

router
  .route("/")
  .get (protect,restrictTo("admin") ,articleController.getAllArticle)
  .post(articleController.careteArticle);

router
  .route("/:id")
  .get(articleController.getArticle)
  .patch(articleController.updateArticle)
  .delete(articleController.deleteArticle);
module.exports = router;
