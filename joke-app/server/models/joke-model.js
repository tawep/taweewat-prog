const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Joke = new Schema(
    {
        type: { type: String, required: true },
        setup: { type: String, required: true },
        punchline: { type: String, required: true },
        like: { type: String, required: true },
        dislike: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('jokes', Joke)