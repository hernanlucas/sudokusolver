import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCell } from '../redux/actions/boardActions';

const Cell = ({ bigCellNumber, cellNumber }) => {

    const board = useSelector(state => state.board);
    const cellSelected = useSelector(state => state.selectedCell);
    const [rowSelected, columnSelected] = cellSelected;
    const dispatch = useDispatch();

    const getRow = () => parseInt(bigCellNumber / 3) * 3 + parseInt(cellNumber / 3);
    const getColum = () => (bigCellNumber % 3) * 3 + (cellNumber % 3);

    const bigCellNumberSelected = parseInt(rowSelected / 3) * 3 + parseInt(columnSelected / 3);
    const cellNumberSelected =  parseInt(rowSelected % 3 * 3) + parseInt(columnSelected % 3);

    const isSelected =
        (bigCellNumberSelected === bigCellNumber && cellNumberSelected === cellNumber)
            ? true : false;

    const dispatchCellSelected = () => {
        const row = getRow();
        const column = getColum();
        dispatch(setSelectedCell([row, column]));
    };

    const getNumber = () => {
        const row = getRow();
        const column = getColum();
        return board[row][column] !== 0 ? board[row][column] : "X";
    }

    return (
        <div className={`cell${isSelected ? " cellSelected" : ''}`} onClick={dispatchCellSelected}>
            {getNumber()}
        </div>
    );
};

export default Cell;