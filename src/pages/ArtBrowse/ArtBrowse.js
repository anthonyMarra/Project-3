import BoardDisplay from "./BoardDisplay"
export default function ArtBrowse({ boards }) {
    return (
        <>
            {boards?.map(function (board, y) {
                y = y + 1
                return (<>
                    <h2>{board.title}</h2>
                    <h3>{board.artistID}</h3>
                    <BoardDisplay key={y} board={board} />
                </>
                )
            })}
        </>
    );
}