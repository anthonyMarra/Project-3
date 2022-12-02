import './board.css';

import { useRef, useEffect } from 'react';
let userColor = "white"

export default function Board({ board, penColor }) {
    userColor = penColor
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
            <div class="Board">
                {board.map(function (row, y) {
                    y = y + 1
                    return (<div className={row}>
                        {row.map(function (color, x) {
                            x = x + 1
                            return (
                                <div className={`${"y" + y} ${"x" + x} box ${color}`} onClick={paint}></div>
                            )
                        })}
                    </div>)
                })}
            </div>
        </>
    );
}


function paint(box) {
    const currentColor = box.target.className.split(' ').pop();

    // if (currentColor != "box") {
    box.target.classList.remove(currentColor);
    box.target.className = box.target.className + " " + userColor
    console.log(box.target.className)
    // } else {
    //     box.target.className = box.target.className + " " + currentColor
    // }
}