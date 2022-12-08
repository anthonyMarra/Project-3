import { Component } from "react";
import { updateArt } from '../../utilities/art-service';
import { Link } from 'react-router-dom'


export default function UpdateButton({ artID, setUpdateID }) {
    function onClick() {
        setUpdateID(artID)
    }

    const link = "/update/" + artID
    return (
        <>
            <Link to={link} onClick={onClick}>Update This Art Piece</Link>
        </>
    )
}