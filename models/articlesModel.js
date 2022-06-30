const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please give a article name!"],
  },

  description: {
    type: String,
    required: [true, "Please give a article description!"],
  },
  image: String,

  editor: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Editor",
    },
  ],
});
// articleSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "editor",
//   });

//   next();
// });
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
