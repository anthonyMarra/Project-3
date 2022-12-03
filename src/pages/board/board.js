import './board.css';

import { useRef, useEffect } from 'react';
let userColor = "white"
let changeBoard;
let tempBoard;
let mouseDown = false
export default function Board({ board, penColor, setBoard }) {
    userColor = penColor
    changeBoard = setBoard
    tempBoard = board
    let row = board.length
    let col = board[row - 1].length
    row = 500 / row
    col = 1000 / col
    if (row < col) {
        //set box height and width to row
    } else {
        //set box height and width to col
    }
    return (
        <>
            <div className="Board">
                {board.map(function (row, y) {
                    y = y + 1
                    return (<div className={row}>
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

function erase(box) {
    const currentColor = box.target.className.split(' ').pop();
    box.target.classList.remove(currentColor)
    box.target.className = box.target.className + " white"
    updateBoard(box, "white")
}

function paint(box) {
    window.onmousedown = (function () {
        mouseDown = true
    })
    window.onmouseup = (function () {
        mouseDown = false
    })
    if (mouseDown) {
        const currentColor = box.target.className.split(' ').pop();
        box.target.classList.remove(currentColor)
        box.target.className = box.target.className + " " + userColor
        updateBoard(box, userColor)
    }
}
function paintSquare(box) {
    const currentColor = box.target.className.split(' ').pop();
    box.target.classList.remove(currentColor)
    box.target.className = box.target.className + " " + userColor
    updateBoard(box, userColor)
}
function updateBoard(box, color) {
    let y = box.target.className.split('y')
    y = y[0]
    let x = box.target.className.split('x')
    x = x[1]
    tempBoard[y - 1][x - 1] = color
    changeBoard(tempBoard)
}