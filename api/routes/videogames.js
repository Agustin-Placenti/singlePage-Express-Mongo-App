const express = require("express");
const {
  addVideoGame,
  getVideoGames,
  getVideoGameById,
  deleteVideoGameById,
} = require("../controllers/videogameController");
const router = express.Router();

router.post("/", addVideoGame);
router.get("/", getVideoGames);
router.get("./:id", getVideoGameById);
router.delete("./:id", deleteVideoGameById);

module.exports = router;
