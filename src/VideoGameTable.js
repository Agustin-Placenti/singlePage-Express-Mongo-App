import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constants from './Constants';
function VideoGameTable () {
    const [deleted, setDeleted] = useState (false);

    useEffect(() => {
        if (deleted) return null
    }, [deleted]);

    async function deleteModal() {
        const resultado = await Swal.fire({
            title: 'Confirmation',
            text: `Delete "${this.props.videogame.name}"?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3298dc',
            cancelButtonColor: '#f14668',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí, eliminar'
        });
        if (!resultado.value) {
            return;
        }
        const response = await fetch(`${Constants.RUTA_API}/${this.props.videogame._id}`, {
            method: "DELETE",
        });
        const successful = await response.json();
        if (successful) {
            toast('Videogame deleted ', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setDeleted(true);
        } else {
            toast.error("Failed deleting, try again");
        }
    }
    return (
        <tr>
            <td>{this.props.videogame.name}</td>
            <td>{this.props.videogame.price}</td>
            <td>{this.props.videogame.evaluation}</td>
            <td>
                <button onClick={deleteModal()} className="button is-danger">Delete</button>
            </td>
        </tr>
    );
}

export default VideoGameTable;