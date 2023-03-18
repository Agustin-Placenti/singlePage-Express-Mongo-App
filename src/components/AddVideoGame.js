import React, { useState } from "react";
import Constants from "../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function AddVideoGame() {
  // TODO wrap form with formik to avoid handleChange function
  // <Formik initialValues: ..., validationSchema: ..., onSubmit: ...> <Form> </Formik>
  // TODO add TS to videogame interface
  const [videoGame, setVideoGame] = useState({
    name: "",
    price: "",
    evaluation: "",
    // image: "",
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

  const updateVideoGame = (e) => {
    videoGame[e.target.id] = e.target.value;
    setVideoGame(Object.assign({}, videoGame));
  };

  function encodeImageFileAsURL(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      videoGame[e.target.id].stringB64 = reader.result;
      updateVideoGame(e);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="column is-one-third">
      <h1 className="is-size-3">Add videoGame</h1>
      <ToastContainer></ToastContainer>
      <form className="field" onSubmit={(event) => submitForm(event)}>
        <div className="form-group">
          <label className="label" htmlFor="image">
            Image:
          </label>
          <button>
            <input
              // required
              type="file"
              id="image"
              name="filename"
              accept="image/jpeg"
              value={videoGame.image}
              // onChange={(event) => encodeImageFileAsURL(event)}
            />
          </button>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            autoFocus
            required
            placeholder="Name"
            type="text"
            id="name"
            onChange={(event) => updateVideoGame(event)}
            value={videoGame.name}
            className="input"
          />
          <label className="label" htmlFor="price">
            Price:
          </label>
          <input
            required
            placeholder="Price"
            type="number"
            id="price"
            onChange={(event) => updateVideoGame(event)}
            value={videoGame.price}
            className="input"
          />
          <label className="label" htmlFor="evaluation">
            Evaluation:
          </label>
          <input
            required
            placeholder="Evaluation"
            type="number"
            id="evaluation"
            onChange={(event) => updateVideoGame(event)}
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
