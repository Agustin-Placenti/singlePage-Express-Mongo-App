import React, { useState } from "react";
import Constants from "../../utils/Constants";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function AddVideoGame({handleAddSucessfully}) {
  // TODO wrap form with formik to avoid handleChange function
  // <Formik initialValues: ..., validationSchema: ..., onSubmit: ...> <Form> </Formik>
  // TODO add TS to videogame interface
  const [videoGame, setVideoGame] = useState({
    name: "",
    price: "",
    evaluation: "",
    image: "",
  });
  const navigate = useNavigate();

  async function submitForm(e) { 
    e.preventDefault();

    const responseAxios = await axios.post(`${Constants.RUTE_API_VIDEOGAMES}`, videoGame)
    const successful = responseAxios.status === 201;
    if (successful) {
      handleAddSucessfully(true);
      navigate("/");
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
      videoGame[e.target.id] = reader.result;
      setVideoGame(Object.assign({}, videoGame));
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="column is-one-third has-text-white" aria-hidden="true">
      <h1 className="is-size-3">Add videoGame</h1>
      <form className="field" onSubmit={(event) => submitForm(event)}>
        <div className="form-group">
          <label className="label has-text-white" htmlFor="image">
            Image:
          </label>
          <button>
            <input
              // required
              type="file"
              id="image"
              name="filename"
              accept="image/jpeg"
              onChange={(event) => encodeImageFileAsURL(event)}
            />
          </button>
          <label className="label has-text-white" htmlFor="name">
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
          <label className="label has-text-white" htmlFor="price">
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
          <label className="label has-text-white" htmlFor="evaluation">
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
        <div className="form-group mt-5">
          <button className="button is-success">Save</button>
          <Link to="/" className="button is-primary ml-4">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddVideoGame;
