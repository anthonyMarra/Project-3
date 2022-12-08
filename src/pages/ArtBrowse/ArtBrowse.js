import BoardDisplay from "./BoardDisplay"
import DeleteButton from "./DeleteButton"
import UpdateButton from "./UpdateButton"
export default function ArtBrowse({ boards, user, setUpdateDatabase, setUpdateID }) {
    return (
        <>
            {boards?.map(function (board, y) {
                y = y + 1
                if (user && user._id === board.artistID) {
                    return (<>
                        <h2>Art Piece Title: {board.title}</h2>
                        <h3>Artist's Name: {board.artistName}</h3>
                        <BoardDisplay key={y} board={board} />
                        <DeleteButton artID={board._id} setUpdateDatabase={setUpdateDatabase} />
                        <UpdateButton artID={board._id} setUpdateID={setUpdateID} />
                        <hr></hr></>)
                }
                // else if (user) {
                //     return (<>
                //         <h2>Art Piece Title: {board.title}</h2>
                //         <h3>Artist's Name: {board.artistName}</h3>
                //         <BoardDisplay key={y} board={board} />
                //         <hr></hr></>)
                // } 
                else {
                    return (<>
                        <h2>Art Piece Title: {board.title}</h2>
                        <h3>Artist's Name: {board.artistName}</h3>
                        <BoardDisplay key={y} board={board} />
                        <hr></hr></>)
                }
            })}
        </>
    );
}