const mongoose = require('../connection_mongo');
const VideoGame = mongoose.model('VideoGame', {
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 0,
    },
    calificacion: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = VideoGame;