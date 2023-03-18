const VideoGame = require("../models/videoGameModel");

async function addVideoGame(req, res) {
  try {
    const { name, price, evaluation, image } = req.body;

    const videogame = VideoGame({
      name,
      price,
      evaluation,
      image,
    });

    const videoGameStored = await videogame.save();

    res.status(201).send(videoGameStored);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getVideoGames(req, res) {
  const videogames = await VideoGame.find();
  res.status(200).send(videogames);
}

async function getVideoGameById(req, res) {
  const videogame = await VideoGame.findById(req.params.id);
  res.status(200).send(videogame);
}

async function deleteVideoGameById(req, res) {
  await VideoGame.findOneAndDelete({ _id: req.params.id });
  res.status(204).send(true);
}

module.exports = {
  addVideoGame,
  getVideoGames,
  getVideoGameById,
  deleteVideoGameById,
};
