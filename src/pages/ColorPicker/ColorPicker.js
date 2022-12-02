
export default function ColorPicker({ setPenColor, setCol, setRow }) {
    function handleColorChange(evt) {
        setPenColor(evt.target.value)
    }
    function handleColChange(evt) {
        console.log(evt.target.value)
        setCol(evt.target.value)
    }
    function handleRowChange(evt) {
        console.log(evt.target.value)
        setRow(evt.target.value)
    }
    function handleGridChange(evt) {
        evt.preventDefault();
        console.log(evt.target.width)

    }
    return (
        //make suer that you put ignore defualt on here so it doenst mess stuff up when ever you submit
        <>
            <form onSubmit={handleGridChange}>
                <label>Board Width</label>
                <input name="width" />
                <label>Board Height</label>
                <input name="height" />
                <button type="submit">Change the Board Dimentions</button>
                <select onChange={handleColorChange}>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                </select>
            </form>
        </>
    )
}

