const Joke = require('../models/joke-model')

createJoke = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a joke',
        })
    }

    const joke = new Joke(body)

    if (!joke) {
        return res.status(400).json({ success: false, error: err })
    }

    joke
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: joke._id,
                message: 'Joke created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Joke not created!',
            })
        })
}

updateJoke = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Joke.findOne({ _id: req.params.id }, (err, joke) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Joke not found!',
            })
        }
        joke.type = body.type
        joke.setup = body.setup
        joke.punchline = body.punchline
        joke
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: joke._id,
                    message: 'Joke updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Joke not updated!',
                })
            })
    })
}

deleteJoke = async (req, res) => {
    await Joke.findOneAndDelete({ _id: req.params.id }, (err, joke) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!joke) {
            return res
                .status(404)
                .json({ success: false, error: 'Joke not found' })
        }

        return res.status(200).json({ success: true, data: joke })
    }).catch(err => console.log(err))
}

getJokeById = async (req, res) => {
    await Joke.findOne({ _id: req.params.id }, (err, joke) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!joke) {
            return res
                .status(404)
                .json({ success: false, error: 'Joke not found' })
        }
        return res.status(200).json({ success: true, data: joke })
    }).catch(err => console.log(err))
}

getJokes = async (req, res) => {
    await Joke.find({}, (err, jokes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!jokes.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Joke not found' })
        }
        return res.status(200).json({ success: true, data: jokes })
    }).catch(err => console.log(err))
}

likeJokeById = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to like',
        })
    }

    Joke.findOne({ _id: req.params.id }, (err, joke) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Joke not found!',
            })
        }
        joke.like = body.like
        joke
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: joke._id,
                    message: 'Joke leked!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Joke not liked!',
                })
            })
    })
}

dislikeJokeById = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to like',
        })
    }

    Joke.findOne({ _id: req.params.id }, (err, joke) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Joke not found!',
            })
        }
        joke.dislike = body.dislike
        joke
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: joke._id,
                    message: 'Joke disleked!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Joke not disliked!',
                })
            })
    })
}

module.exports = {
    createJoke,
    updateJoke,
    deleteJoke,
    getJokes,
    getJokeById,
    likeJokeById,
    dislikeJokeById,
}