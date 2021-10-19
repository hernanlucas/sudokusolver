import { useSelector, useDispatch } from "react-redux";
import { setBoardCell } from '../redux/actions/boardActions';

const Key = ({ number }) => {

    const dispatch = useDispatch();
    const cell = useSelector(state => state.selectedCell);

    const setCellNumber = () => {
        dispatch(setBoardCell({number: number, selectedCell: cell}))
    };

    return (
        <button className="key" onClick={setCellNumber}>
            {number}
        </button>
    );
};

export default Key;