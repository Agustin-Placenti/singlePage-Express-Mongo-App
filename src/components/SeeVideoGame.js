import React, { useState, useEffect } from "react";
import Constants from "../utils/Constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoGameTable from "./VideoGameTable";
import VideoGameContext from "../Context/VideoGameContext";
import { fetchData } from "../utils/fetchData";

function SeeVideoGames() {
  const [videogames, setVideoGames] = useState([]);
  // crear objeto formik con array de videogames y videogame

  async function fetchVideos() {
    const response = await fetchData(`${Constants.RUTE_API_VIDEOS}`);
    setVideoGames(response);
    // updatear el objeto formik con el nuevo array
  } 

  async function fetchVideos() {
    const response = await fetchData(`${Constants.RUTE_API_VIDEOS}`);
    setVideoGames(response);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  const updateTable = () => fetchVideos();

  return (
    <div>
      <div className="column">
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
