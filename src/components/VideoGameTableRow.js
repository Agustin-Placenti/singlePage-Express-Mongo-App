import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Constants from "../utils/Constants";
import axios from "axios"

function VideoGameTableRow({ videoGame, updateTable }) {
  async function deleteModal() {
    const resultado = await Swal.fire({
      title: "Confirmation",
      text: `Delete "${videoGame.name}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3298dc",
      cancelButtonColor: "#f14668",
      cancelButtonText: "No",
      confirmButtonText: "Yes, delete",
    });
    if (!resultado.value) {
      return;
    }
    const responseAxios = await axios.delete(`${Constants.RUTE_API_VIDEOGAMES}/${videoGame._id}`)
    const successful = responseAxios.status === 204;
    if (successful) {
      toast("Videogame deleted ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // callback function from SeeVideoGame
      updateTable();
    } else {
      toast.error("Failed deleting, try again");
    }
  }

  return (
    <tr>
      <td>
        <img alt={'img'} src={videoGame.image} />
      </td>
      <td>{videoGame.name}</td>
      <td>{videoGame.price}</td>
      <td>{videoGame.evaluation}</td>
      <td>
        <button onClick={() => deleteModal()} className="button is-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default VideoGameTableRow;
