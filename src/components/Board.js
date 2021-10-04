import BigCell from './BigCell';

const Board = () => {
    const bigCellsAmount = 9;

    return (
        <div className="board">
            {[...Array(bigCellsAmount)].map((elem, index) => <BigCell key={index}/>)}
        </div>
    )
}

export default Board;