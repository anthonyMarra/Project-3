export default function BoardDisplay({ board }) {
    return (
        <>
            <div className="Board">
                {board.art.map(function (row, y) {
                    y = y + 1
                    return (<div key={y}>
                        {row.map(function (color, x) {
                            x = x + 1
                            return (
                                <div key={`${y + " " + x}`} className={`${y + "y"} ${"x" + x + "x"} box ${color}`} ></div>
                            )
                        })}
                    </div>)
                })}
            </div>
        </>
    );
}