import { Component } from "react";
import { updateArt } from '../../utilities/art-service';
import { Link } from 'react-router-dom'


export default function UpdateButton({ artID }) {
    const link = "/update/" + artID
    return (
        <>
            <Link to={link}>Update This Art Piece</Link>
        </>
    )
}