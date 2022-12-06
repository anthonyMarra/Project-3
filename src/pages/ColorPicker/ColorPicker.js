import { useEffect, useState } from "react"
import './ColorPicker.css';


export default function ColorPicker({ setPenColor, setCol, setRow, col, row, user }) {
    const [newCol, setNewCol] = useState(col)
    const [newRow, setNewRow] = useState(row)
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
        if (col != newCol) {
            setCol(newCol)
        }
        if (row != newRow) {
            setRow(newRow)
        }

        //console.log(window.innerWidth)
        //set this to a variable to see the users current window size
    }
    async function handleSubmit(evt) {
        evt.preventDefault();
        if (user) {
            // try {
            //     const formData = { ...this.state };
            //     delete formData.confirm;
            //     delete formData.error;
            //     // The promise returned by the signUp service method
            //     // will resolve to the user object included in the
            //     // payload of the JSON Web Token (JWT)
            //     const user = await signUp(formData);
            //     // Update user state with user
            //     this.props.setUser(user);
            // } catch {
            //     // Invalid signup
            //     this.setState({
            //         error: 'Sign Up Failed - Try Again'
            //     });
            // }
        } else {
            window.alert("You must first sign in to post your art")
        }
    }
    return (
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
            <form onSubmit={handleSubmit}>
                <button type="submit">Post Your Art Piece</button>
            </form>
        </>
    )
}

