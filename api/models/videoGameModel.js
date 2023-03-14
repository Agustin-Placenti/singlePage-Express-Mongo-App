const mongoose = require('../connection_mongo');

const VideoGame = mongoose.model('videogames', {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    evaluation: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = VideoGame;