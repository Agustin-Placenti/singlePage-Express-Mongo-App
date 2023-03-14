import React from "react";
import VideoGameContext from "../Context/VideoGameContext";
import VideoGameTableRow from "./VideoGameTableRow";

function VideoGameTable({ updateTable }) {
  // could be another param, just to show context api
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
            return (
              <VideoGameTableRow
                videoGame={videoGame}
                key={videoGame._id}
                updateTable={updateTable}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default VideoGameTable;