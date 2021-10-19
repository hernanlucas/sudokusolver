import Cell from "./Cell";

const BigCell = ({ bigCellNumber }) => {
    const cellsAmount = 9;

    return (
        <div className="outer-cell">
            {[...Array(cellsAmount)].map((elem, index) => (
                <Cell key={index} bigCellNumber={bigCellNumber} cellNumber={index} />
            ))}
        </div>
    );
};

export default BigCell;
