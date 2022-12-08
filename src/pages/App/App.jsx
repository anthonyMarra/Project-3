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
import UpdateBoard from '../board/UpdateBoard';

function App() {
  console.log("refreshed app.js")
  const [user, setUser] = useState(getUser());

  const [boards, setBoards] = useState([])

  const [updateDatabase, setUpdateDatabase] = useState([1])
  useEffect(() => {
    const fetchBoards = async () => {
      const res = await fetch("/api/art")
      const json = await res.json()
      if (res.ok) {
        setBoards(json)
      }
    }
    fetchBoards()
  }, updateDatabase)

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/draw" element={<Board setUpdateDatabase={setUpdateDatabase} user={user} />} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
        <Route path="/update/:id" element={<UpdateBoard boards={boards} user={user} setUpdateDatabase={setUpdateDatabase} />} />
        <Route path="/" element={<ArtBrowse boards={boards} user={user} setUpdateDatabase={setUpdateDatabase} />} />
        <Route path="/*" element={<ArtBrowse boards={boards} user={user} />} />
      </Routes>
    </>
  )
}
export default App;