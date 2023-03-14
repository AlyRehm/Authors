const Author = require("../models/author.model");

//CREATE NEW AUTHOR
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => res.json({author: newAuthor}))
        .catch((err) => res.json ({messsage: "Something went wrong", error:err}));
}

//GET ALL AUTHORS
module.exports.findAllAuthors = (req,res) => {
    Author.find({})
    .then(allAuthors => {
        console.log(allAuthors);
        res.json(allAuthors);
    })
    .catch(err=>res.json({message:"Something went wrong", error:err}));
}

//GET ONE AUTHOR
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id : req.params.id})
        .then((oneAuthor) =>{
            console.log(oneAuthor);
            res.json(oneAuthor)
        })
        .catch((err => res.json({message: "Something went wrong", error:err})));
}

//UPDATE AUTHOR
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id : req.params.id}, req.body,
        {new: true, runValidators: true}
        )
        .then((updatedAuthor) => {
            console.log(updatedAuthor);
            res.json(updatedAuthor);
        })
        .catch((err => res.json({message: "Something went wrong!", error:err})));
}

// DELETE
module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id: req.params.id})
        .then((deletedAuthor) => {
            console.log(deletedAuthor);
            res.json(deletedAuthor);
        })
        .catch((err => res.json({message: "Something went wrong!", error:err})));
}