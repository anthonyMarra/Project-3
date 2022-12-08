import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import Board from '../board/board';
import ColorPicker from '../ColorPicker/ColorPicker';
import ArtBrowse from '../ArtBrowse/ArtBrowse';

function App() {
  console.log("refreshed app.js")
  const [user, setUser] = useState(getUser());
  const [col, setCol] = useState(16);
  const [row, setRow] = useState(16);
  const [penColor, setPenColor] = useState("blue")
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


  const [boards, setBoards] = useState([])
  const [updateBoard, setUpdateBoard] = useState([1])
  useEffect(() => {
    const fetchBoards = async () => {
      const res = await fetch("/api/art")
      const json = await res.json()
      if (res.ok) {
        setBoards(json)
      }
    }
    fetchBoards()
  }, updateBoard)

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/draw" element={<><Board board={board} penColor={penColor} setBoard={setBoard} /><ColorPicker board={board} setPenColor={setPenColor} setCol={setCol} setRow={setRow} col={col} row={row} user={user} setUpdateBoard={setUpdateBoard} /></>} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
        <Route path="/" element={<ArtBrowse boards={boards} user={user} />} />
        <Route path="/*" element={<ArtBrowse boards={boards} user={user} />} />
      </Routes>
    </>
  )
}
export default App;