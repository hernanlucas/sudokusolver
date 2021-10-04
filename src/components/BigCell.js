import Cell from './Cell'

const BigCell = () => {
    const cellsAmount = 9;

    return (
        <div className="outer-cell">
            {[...Array(cellsAmount)].map((elem, index) => <Cell key={index}/>)}
        </div>
    )
}

export default BigCell;