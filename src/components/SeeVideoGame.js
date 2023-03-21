import React, { useState, useEffect } from "react";
import Constants from "../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoGameTable from "./VideoGameTable";
import VideoGameContext from "../Context/VideoGameContext";
import { fetchData } from "../utils/fetchData";

function SeeVideoGames({addSuccessfully, handleAddSucessfully}) {
  const [videogames, setVideoGames] = useState([]);

  async function fetchVideoGames() {
    const response = await fetchData(`${Constants.RUTE_API_VIDEOGAMES}`);
    setVideoGames(response);
  }

  useEffect(() => {
    fetchVideoGames();
    if (addSuccessfully) {
      toast("Videogame saved 🎮", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleAddSucessfully(false);
    }
  }, [addSuccessfully, handleAddSucessfully]);

  const updateTable = () => fetchVideoGames();

  return (
    <div>
      <div className="column has-text-white">
        <h1 className="is-size-3">See videogames</h1>
        <ToastContainer></ToastContainer>
      </div>
      <VideoGameContext.Provider value={videogames}>
        <VideoGameTable updateTable={() => updateTable()} />
      </VideoGameContext.Provider>
    </div>
  );
}

export default SeeVideoGames;
