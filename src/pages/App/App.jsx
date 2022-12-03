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

function App() {
  console.log("refreshed app.js")
  const [col, setCol] = useState(16);
  const [row, setRow] = useState(16);
  console.log(row)
  console.log(col)
  const [penColor, setPenColor] = useState("blue")
  let boardProto = []
  for (let y = 0; y < row; y++) {
    boardProto.push([])
    for (let x = 0; x < col; x++) {
      boardProto[y].push("white")
    }
  }
  console.log(boardProto)
  const [board, setBoard] = useState(boardProto);
  console.log(board)




  return (
    <>
      <Board board={board} penColor={penColor} setBoard={setBoard} />
      <ColorPicker setPenColor={setPenColor} setCol={setCol} setRow={setRow} />
    </>
  )

}

// function App() {
//   const [user, setUser] = useState(getUser());

//   return (
//     <main className="App">
//       { user ?
//         <>
//           <NavBar user={user} setUser={setUser} />
//           <Routes>
//             {/* Route components in here */}
//             <Route path="/orders/new" element={<NewOrderPage />} />
//             <Route path="/orders" element={<OrderHistoryPage />} />
//           </Routes>
//         </>
//         :
//         <AuthPage setUser={setUser} />
//       }
//     </main>
//   );
// }

export default App;
