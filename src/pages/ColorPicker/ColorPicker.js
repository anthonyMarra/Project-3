import { useState } from "react"


export default function ColorPicker({ setPenColor, setCol, setRow }) {
    const [newCol, setNewCol] = useState(16)
    const [newRow, setNewRow] = useState(16)
    function handleColorChange(evt) {
        setPenColor(evt.target.value)
    }
    function handleColChange(event) {
        setNewCol(event.target.value)
    }
    function handleRowChange(event) {
        setNewRow(event.target.value)
    }
    function handleGridChange(evt) {
        evt.preventDefault();
        console.log(evt.target.width.value)
        console.log(newCol)
        setCol(newCol)
        setRow(newRow)

    }
    return (
        //make suer that you put ignore defualt on here so it doenst mess stuff up when ever you submit
        <>
            <form onSubmit={handleGridChange}>
                <label>Board Width</label>
                <input name="width" value={newCol} onChange={handleColChange} />
                <label>Board Height</label>
                <input name="height" value={newRow} onChange={handleRowChange} />
                <button type="submit">Change the Board Dimentions</button>
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
        </>
    )
}

