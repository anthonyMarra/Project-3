import { useEffect, useState } from "react"
import './ColorPicker.css';
import UpdateArt from "./UpdateArt";


export default function ColorPickerUpdate({ setPenColor, user, board, setUpdateDatabase, updateID }) {

    function handleColorChange(evt) {
        setPenColor(evt.target.value)
        console.log(evt.target.value)
    }

    return (
        <>
            <form>
                <select onChange={handleColorChange}>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="purple">purple</option>
                    <option value="orange">orange</option>
                    <option value="white">white</option>
                    <option value="black">black</option>
                </select>
            </form>
            <UpdateArt user={user} board={board} setUpdateDatabase={setUpdateDatabase} updateID={updateID} />
        </>
    )
}

