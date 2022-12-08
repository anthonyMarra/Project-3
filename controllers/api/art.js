let Art = require("../../models/art");
const mongoose = require("mongoose")

module.exports = {
    create,
    index,
    delete: deleteArt,
    update
};

function create(req, res, next) {
    const art = new Art({ artistID: req.body.artistID, title: req.body.title })
    art.artistID = req.body.artistID
    art.artistName = req.body.artistName
    art.art = req.body.art
    art.save()
        .then(function (art) {
            return res.redirect("/")
        })
        .catch(function (err) {
            console.log(err)
            res.status(400).json(err);
            return next(err)
        })
}

function index(req, res, next) {
    Art.find()
        .then(art => res.json(art))
        .catch(err => res.status(400).json("Error: " + err))
}

function deleteArt(req, res, next) {
    Art.findByIdAndDelete(req.params.id)
        .then(() => res.json("art deleted."))
        .catch(err => res.staus(400).json("Error: " + err))
}

function update(req, res, next) {
    Art.findById(req.params.id)
        .then(art => {
            art.title = req.body.title
            art.art = req.body.art
            art.save()
                .then(() => res.json("art updated!"))
                .catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
}



// router.route("/:id").get((req, res) => {
//     Art.findById(req.params.id)
//         .then(art => res.json(art))
//         .catch(err => res.status(400).json("Error: " + err))
// })