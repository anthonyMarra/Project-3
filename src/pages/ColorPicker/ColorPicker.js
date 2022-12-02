let chosePenColor = "white"
let choseRow;
let choseCol;

export default function ColorPicker({ setPenColor, setCol, setRow }) {
    choseCol = setCol
    choseRow = setRow
    chosePenColor = setPenColor
    return (
        //make suer that you put ignore defualt on here so it doenst mess stuff up when ever you submit
        <>
            <form>
                <label>Board Width</label>
                <input onChange={handleColChange}>16</input>
                <label>Board Height</label>
                <input onChange={handleRowChange}>16</input>
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

function handleColorChange(evt) {
    chosePenColor(evt.target.value)
}
function handleColChange(evt) {
    console.log(evt.target.value)
    choseCol(evt.target.value)
}
function handleRowChange(evt) {
    console.log(evt.target.value)
    choseRow(evt.target.value)
}