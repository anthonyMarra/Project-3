let chosePenColor = "white"

export default function ColorPicker({ setPenColor }) {

    chosePenColor = setPenColor
    return (
        <>
            <form onSubmit={penColor}>
                <select name="cars" id="cars">
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                </select>
                <button type="submit">pick color</button>
            </form>
        </>
    )
}

function penColor(color) {
    chosePenColor(color)
}