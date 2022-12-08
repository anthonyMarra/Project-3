import './board.css';

import { useRef, useEffect } from 'react';
let mouseDown = false
export default function Board({ board, penColor, setBoard }) {
    // let row = board.length
    // let col = board[row - 1].length
    // row = 500 / row
    // col = 1000 / col
    // if (row < col) {
    //     //set box height and width to row
    // } else {
    //     //set box height and width to col
    // } https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/

    function updateBoard(box, color) {
        let y = box.target.className.split('y')
        y = y[0]
        let x = box.target.className.split('x')
        x = x[1]
        board[y - 1][x - 1] = color
        setBoard(board)
    }
    //up to here on board
    function paintSquare(box) {
        const currentColor = box.target.className.split(' ').pop();
        box.target.classList.remove(currentColor)
        box.target.className = box.target.className + " " + penColor
        updateBoard(box, penColor)
    }

    function paint(box) {
        window.onmousedown = (function () {
            mouseDown = true
        })
        window.onmouseup = (function () {
            mouseDown = false
        })
        if (mouseDown) {
            paintSquare(box)
        }
    }

    function erase(box) {
        const currentColor = box.target.className.split(' ').pop();
        box.target.classList.remove(currentColor)
        box.target.className = box.target.className + " white"
        updateBoard(box, "white")
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
                                <div key={`${y + " " + x}`} className={`${y + "y"} ${"x" + x + "x"} box ${color}`} onDoubleClick={erase} onMouseOver={paint} onMouseDown={paintSquare}></div>
                            )
                        })}
                    </div>)
                })}
            </div>
        </>
    );
}