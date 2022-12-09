import { useEffect, useState } from "react"
import CreateArt from "./CreateArt";
import './ColorPicker.css';


export default function ColorPickerUpdate({ setPenColor, user, board, setUpdateDatabase }) {

    function handleColorChange(evt) {
        setPenColor(evt.target.value)
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
            <CreateArt user={user} board={board} setUpdateDatabase={setUpdateDatabase} />
        </>
    )
}

