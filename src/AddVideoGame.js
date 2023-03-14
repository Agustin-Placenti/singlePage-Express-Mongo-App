import React, { useState } from 'react';
import Constants from "./Constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
function AddVideoGame () {
    // TODO use typescript
    const [videoGame, setVideoGame] = useState({name: '', price: 0, evaluation: 0});

    async function submitForm (e) {
        e.preventDefault();

        const videoGameJson = JSON.stringify(videoGame);
        const response = await fetch(`${Constants.RUTE_API}`, {
            method: "POST",
            body: videoGameJson,
            headers: {
                "Content-Type":"application/json",
            } 
        });
        const successful = await response.json();
        if (successful) {
            toast('Videogame saved 🎮', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setVideoGame({});
        } else {
            toast.error("Failed Saving, try again");
        }
    }
    const handleChange = (e) => {
        setVideoGame(videoGame => ({
            ...videoGame,
            ...e.target.value
        }));
    }

    return (
        <div className="column is-one-third">
            <h1 className="is-size-3">Add videoGame</h1>
            <ToastContainer></ToastContainer>
            <form className="field" onSubmit={submitForm()}>
                <div className="form-group">
                    <label className="label" htmlFor="name">Name:</label>
                    <input autoFocus required placeholder="Name" type="text" id="nombre" onChange={handleChange()} value={videoGame.name} className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="price">Price:</label>
                    <input required placeholder="Price" type="number" id="price" onChange={handleChange()} value={videoGame.price} className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="evaluation">Evaluation:</label>
                    <input required placeholder="Evaluation" type="number" id="evaluation" onChange={handleChange()} value={videoGame.evaluation} className="input" />
                </div>
                <div className="form-group">
                    <button className="button is-success mt-2">Save</button>
                    &nbsp;
                    <Link to="/videogames/see" className="button is-primary mt-2">Back</Link>
                </div>
            </form>
        </div>
    );
}

export default AddVideoGame;