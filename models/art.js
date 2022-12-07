const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    artistID: { type: String, required: true },
    title: { type: String, required: true },
    art: [[{ type: String }]]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Art', artSchema);