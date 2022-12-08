import BoardDisplay from "./BoardDisplay"
export default function ArtBrowse({ boards }) {
    return (
        <>
            <p>worked</p>
            {console.log(boards)}
            {boards?.map(function (board, y) {
                y = y + 1
                return (<>
                    <p>worked 2</p>
                    <BoardDisplay key={y} board={board} />
                </>
                )
            })}
        </>
    );
}