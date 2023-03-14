/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import Constants from "../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function AddVideoGame() {
  // TODO wrap form with formik to avoid handleChange function
  // <Formik initialValues: ..., validationSchema: ..., onSubmit: ...> <Form> </Formik>
  const [videoGame, setVideoGame] = useState({
    name: "",
    price: "",
    evaluation: "",
  });
  const navigate = useNavigate();

  async function submitForm(e) {
    e.preventDefault();

    const videoGameJson = JSON.stringify(videoGame);
    const response = await fetch(`${Constants.RUTE_API_VIDEOS}`, {
      method: "POST",
      body: videoGameJson,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const successful = await response.json();
    if (successful) {
      // TODO this altert should be passed to SeeVideoGame
      toast("Videogame saved 🎮", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/videogames/see");
    } else {
      toast.error("Failed Saving, try again");
    }
  }

  const handleChange = (e) => {
    const key = e.target.id;
    let value = e.target.value;
    if (key !== "name") {
      value = parseInt(value);
    }
    videoGame[key] = value;
    setVideoGame(Object.assign({}, videoGame));
  };

  return (
    <div className="column is-one-third">
      <h1 className="is-size-3">Add videoGame</h1>
      <ToastContainer></ToastContainer>
      <form className="field" onSubmit={() => submitForm(event)}>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            autoFocus
            required
            placeholder="Name"
            type="text"
            id="name"
            onChange={handleChange}
            value={videoGame.name}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="price">
            Price:
          </label>
          <input
            required
            placeholder="Price"
            type="number"
            id="price"
            onChange={handleChange}
            value={videoGame.price}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="evaluation">
            Evaluation:
          </label>
          <input
            required
            placeholder="Evaluation"
            type="number"
            id="evaluation"
            onChange={handleChange}
            value={videoGame.evaluation}
            className="input"
          />
        </div>
        <div className="form-group">
          <button className="button is-success mt-2">Save</button>
          &nbsp;
          <Link to="/videogames/see" className="button is-primary mt-2">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddVideoGame;
