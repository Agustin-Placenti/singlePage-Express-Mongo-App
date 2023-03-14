import React from "react";
import VideoGameContext from "../Context/VideoGameContext";
import VideoGameTableRow from "./VideoGameTableRow";

function VideoGameTable() {
  const videogames = VideoGameContext._currentValue;

  return (
    <div className="table-container">
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Evaluation</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {videogames.map((videoGame) => {
            return <VideoGameTableRow videoGame={videoGame} key={videoGame._id}/>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default VideoGameTable;
