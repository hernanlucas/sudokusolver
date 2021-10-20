import { useDispatch } from 'react-redux';
import { setBoard } from '../redux/actions/boardActions';

const SecondaryActions = () => {

    const dispatch = useDispatch();

    const handleClearBoard = () => {
        const initialBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        dispatch(setBoard(initialBoard));
    }

    return (
        <div className="secondary-actions">
            <button className="btn-solve-selected">Solve Selected</button>
            <button className="btn-clear" onClick={handleClearBoard}>Clear Board</button>
        </div>
    )
}

export default SecondaryActions;