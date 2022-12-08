import BoardDisplay from "./BoardDisplay"
export default function ArtBrowse({ boards, user }) {
    return (
        <>
            {boards?.map(function (board, y) {
                y = y + 1
                if (user && user._id === board.artistID) {
                    return (<>
                        <h2>Art Piece Title: {board.title}</h2>
                        <h3>Artist's Name: {board.artistName}</h3>
                        <BoardDisplay key={y} board={board} />
                        <p>Insert Delete/ Update Button here</p>
                        <hr></hr></>)
                } else if (user) {
                    return (<>
                        <h2>Art Piece Title: {board.title}</h2>
                        <h3>Artist's Name: {board.artistName}</h3>
                        <BoardDisplay key={y} board={board} />
                        <p>Insert Add to collection/ Like Button Here</p>
                        <hr></hr></>)
                } else {
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