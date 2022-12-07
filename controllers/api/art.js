let Art = require("../../models/art");

module.exports = {
    create
};


//user
// async function create(req, res) {
//     try {
//         const art = await Art.create(req.body);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// }

//contracts
function create(req, res, next) {
    console.log("Started adding art to database")
    const art = new Art({ artistID: req.body.artistID, title: req.body.title })
    console.log(req.body)
    art.artistID = req.body.artistID
    art.art = req.body.art
    art.save()
        .then(function (art) {
            console.log(art)
            console.log("I think art was saved!!!")
            return res.redirect("/")
        })
        .catch(function (err) {
            console.log(err)
            res.status(400).json(err);
            return next(err)
        })
}

//youtube
// {
//     // console.log("adding art to database")
//     // const artistID = req.user
//     // console.log(req.user)
//     // console.log(req.body.user)
//     // const title = req.body.title
//     // console.log(req.body.title)
//     // const art = req.body.art
//     // console.log(req.body.art)

//     // const newArt = new Art({
//     //     artistID,
//     //     title,
//     //     art,
//     // })

//     // newArt.save()
//     //     .then(() => res.json("Art Added!!!!"))
// }

// router.route("/").get((req, res) => {
//     Art.find()
//         .then(art => res.json(art))
//         .catch(err => res.status(400).json("Error: " + err))
// })


// router.route("/:id").get((req, res) => {
//     Art.findById(req.params.id)
//         .then(art => res.json(art))
//         .catch(err => res.status(400).json("Error: " + err))
// })

// router.route("/:id").delete((req, res) => {
//     Art.findByIdAndDelete(req.params.id)
//         .then(() => res.json("art deleted."))
//         .catch(err => res.staus(400).json("Error: " + err))
// })

// router.route("update/:id").post((req, res) => {
//     Art.findById(req.params.id)
//         .then(art => {
//             art.title = req.body.title
//             art.art = req.body.art

//             art.save()
//                 .then(() => res.json("art updated!"))
//                 .catch(err => res.status(400).json("Error: " + err))
//         })
//         .catch(err => res.status(400).json("Error: " + err))
// })