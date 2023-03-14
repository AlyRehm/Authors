const mongoose = require ("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minLength: [3, "The author's name must be atleast 3 characters long"]
    }
},{timestamps:true}
)

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;