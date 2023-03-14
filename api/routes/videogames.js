var express = require('express');
var router = express.Router();
var VideoGame = require("../models/videoGameModel.js");

router.post('/', async function (req, res, next) {
  const videoGame = new VideoGame({
    name: req.body.name,
    price: req.body.price,
    evaluation: req.body.evaluation,
  });
  await videoGame.save();
  res.send(videoGame);
});

router.get('/', async function (req, res) {
  const videoGames = await VideoGame.find();
  res.send(videoGames);
});

router.get('/:id', async function (req, res) {
  const videoGame = await VideoGame.findById(req.params.id);
  res.send(videoGame);
});

router.delete('/:id', async function (req, res) {
  await VideoGame.findOneAndDelete({ _id: req.params.id });
  res.send(true);
});

module.exports = router;