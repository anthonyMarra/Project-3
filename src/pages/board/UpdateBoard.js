import './board.css';
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { useRef, useEffect } from 'react';

let rightMouseDown = false
let leftMouseDown = false

export default function UpdateBoard({ boards, user, setUpdateDatabase, updateID }) {

    const [penColor, setpenColor] = useState("blue")

    // const [col, setCol] = useState(boardProto.length);
    // const [row, setRow] = useState(16);

    let boardProto = []
    // for (let y = 0; y < row; y++) {
    //     boardProto.push([])
    //     for (let x = 0; x < col; x++) {
    //         boardProto[y].push("white")
    //     }
    // }
    console.log("in update")

    for (let i = 0; i < boards.length; i++) {
        if (boards[i]._id == updateID) {
            boardProto = boards[i]
        }
    }
    console.log("test" + boardProto)





    const [board, setBoard] = useState(boardProto.art);

    // useEffect(() => {
    //     setBoard(boardProto)
    // }, [col, row])

    function whichOP(box) {
        window.onmousedown = (function (evt) {
            switch (evt.which) {
                case 1:
                    leftMouseDown = true
                    paintSquare(box)
                    break;
                case 2:
                    bucket(box, penColor, undefined)
                    break;
                case 3:
                    rightMouseDown = true
                    erase(box)
                    break;
            }
        })
        window.onmouseup = (function (evt) {
            switch (evt.which) {
                case 1:
                    leftMouseDown = false
                    break;
                case 3:
                    rightMouseDown = false
                    break;
            }
        })
        if (rightMouseDown) {
            erase(box)
        }
        if (leftMouseDown) {
            paintSquare(box)
        }
    }
    function bucket(box, penColor, colorChanging) {

        //trying to get MVP so havent worked on this in a while

        if (colorChanging == undefined) {
            colorChanging = box.target.className.split(' ').pop();
        }
        box.target.classList.remove(colorChanging)
        box.target.className = box.target.className + " " + penColor
        let y = box.target.className.split('y')
        y = y[0]
        let x = box.target.className.split('x')
        x = x[1]
        board[y - 1][x - 1] = penColor
        if (board[y - 1][x] == colorChanging) {
            // board[y - 1][x] = penColor
        }
        setBoard(board)
    }

    function paintSquare(box) {
        const currentColor = box.target.className.split(' ').pop();
        box.target.classList.remove(currentColor)
        box.target.className = box.target.className + " " + penColor
        updateBoard(box, penColor)
    }

    function erase(box) {
        const currentColor = box.target.className.split(' ').pop();
        box.target.classList.remove(currentColor)
        box.target.className = box.target.className + " white"
        updateBoard(box, "white")
    }

    function updateBoard(box, color) {
        let y = box.target.className.split('y')
        y = y[0]
        let x = box.target.className.split('x')
        x = x[1]
        board[y - 1][x - 1] = color
        setBoard(board)
    }

    return (
        <>
            <div className="Board">
                {board.map(function (row, y) {
                    y = y + 1
                    return (<div key={y}>
                        {row.map(function (color, x) {
                            x = x + 1
                            return (
                                <div key={`${y + " " + x}`} className={`${y + "y"} ${"x" + x + "x"} box ${color}`} onDoubleClick={erase} onMouseOver={whichOP}></div>
                            )
                        })}
                    </div>)
                })}
            </div>
            {/* <ColorPicker board={board} setpenColor={setpenColor} setCol={setCol} setRow={setRow} col={col} row={row} user={user} setUpdateDatabase={setUpdateDatabase} /> */}
        </>
    );
}

// sendRequest("/update/:id", "put", birdData)

// import { Component } from "react";
// import { updateArt } from '../../utilities/art-service';


// export default class UpdateButton extends Component {
//     handleSubmit = async (evt) => {
//         evt.preventDefault()
//         try {
//             console.log(this.props.artID)
//             const art = await updateArt(this.props.artID)
//             this.props.setUpdateBoard([this.props.artID + "random"])
//         } catch {
//             this.setState({
//                 error: "Submitting Art Failed, Try Again"
//             })
//         }
//     }
//     render() {
//         return (
//             <>
//                 <form autoComplete="off" onSubmit={this.handleSubmit}>
//                     <button type="submit">Update This Art Piece</button>
//                 </form>
//             </>
//         )
//     }
// }