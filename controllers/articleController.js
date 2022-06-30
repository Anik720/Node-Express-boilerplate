const Article = require("../models/articlesModel");
const AppError = require("./../utils/appError");

const factory = require("./handlerFactory");
// exports.getAllArticle = async (req, res, next) => {

//   console.log("hello")
//   const article = await Article.find();
//   // cosnole.log(article)

//   res.status(200).json({
//     message: 'Success',
//     data: {
//       article,
//     },
//   });
//   // try {

//   // } catch (err) {
//   //   console.log("hello")
//   //   res.status(404).json({
//   //     message: 'failed',
//   //   });
//   // }
// };

exports.getAllArticle = factory.getAll(Article);
exports.careteArticle = factory.createOne(Article);
exports.getArticle = factory.getOne(Article);
exports.updateArticle = factory.updateOne(Article);
exports.deleteArticle = factory.deleteOne(Article);



// exports.careteArticle = async (req, res) => {
//   try {
//     const article = await Article.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         article,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       message: 'failed',
//     });
//   }
// };

// exports.getArticle = async (req, res, next) => {
//   const article = await Article.findById(req.params.id);

//   res.status(200).json({
//     status: 'success',
//     data: {
//       article,
//     },
//   });
// };

// exports.updateArticle = async (req, res, next) => {
//   console.log(req.params.id);

//   const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   if (!article) {
//     return next(new AppError("No article found with that ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       article,
//     },
//   });
// };

// exports.deleteArticle = async (req, res, next) => {
//   const article = await Article.findByIdAndDelete(req.params.id);
//   console.log(req.params);
//   if (!article) {
//     return next(new AppError("No article found with that ID", 404));
//   }

//   res.status(204).json({
//     status: "success",
//     data: article,
//   });
// };
