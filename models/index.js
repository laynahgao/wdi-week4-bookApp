var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/book-app",{ useNewUrlParser: true });



var BookModel = require('./book');
var AuthorModel = require('./author');


module.exports= {
  Book: BookModel,
  Author: AuthorModel
}
