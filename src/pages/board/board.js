import './board.css';
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { useRef, useEffect } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';

let rightMouseDown = false
let leftMouseDown = false

export default function Board({ user, setUpdateDatabase }) {

    const [penColor, setPenColor] = useState("blue")

    const [col, setCol] = useState(16);
    const [row, setRow] = useState(16);

    let boardProto = []
    for (let y = 0; y < row; y++) {
        boardProto.push([])
        for (let x = 0; x < col; x++) {
            boardProto[y].push("white")
        }
    }
    const [board, setBoard] = useState(boardProto);

    useEffect(() => {
        setBoard(boardProto)
    }, [col, row])

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
        if (rightMouseDown && box != undefined) {
            erase(box)
        }
        if (leftMouseDown && box != undefined) {
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
        window.onmouseover = (function (evt) {
            const currentColor = box.target.className.split(' ').pop();
            box.target.classList.remove(currentColor)
            box.target.className = box.target.className + " " + penColor
            updateBoard(box, penColor)
        })
    }

    function erase(box) {
        window.onmouseover = (function (evt) {
            const currentColor = box.target.className.split(' ').pop();
            box.target.classList.remove(currentColor)
            box.target.className = box.target.className + " white"
            updateBoard(box, "white")
        })
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
            <ColorPicker board={board} setPenColor={setPenColor} setCol={setCol} setRow={setRow} col={col} row={row} user={user} setUpdateDatabase={setUpdateDatabase} />
        </>
    );
}

    // let row = board.length
    // let col = board[row - 1].length
    // row = 500 / row
    // col = 1000 / col
    // if (row < col) {
    //     //set box height and width to row
    // } else {
    //     //set box height and width to col
    // } https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/
