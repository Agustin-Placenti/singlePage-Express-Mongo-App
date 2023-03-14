import React, { useState, useEffect } from 'react';
import Constants from "./Constants";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoGameTable from './VideoGameTable';
function SeeVideoGames () {
    const [videogames, setVideoGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${Constants.RUTE_API}`);
            const jsonResponse = await response.json();
            setVideoGames(jsonResponse);
        }
        fetchData()
        .catch(console.error);
    }, []);

    return (
        <div>
            <div className="column">
                <h1 className="is-size-3">See videogames</h1>
                <ToastContainer></ToastContainer>
            </div>
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
                        {videogames.map(videoGame => {
                            return <VideoGameTable key={videoGame._id} videoGame={videoGame}></VideoGameTable>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SeeVideoGames;