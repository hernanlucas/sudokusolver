import { useSelector, useDispatch } from "react-redux";
import Proptypes from "prop-types";
import { setBoardCell } from "../redux/actions/boardActions";

const Key = ({ number }) => {
    const dispatch = useDispatch();
    const cell = useSelector(state => state.selectedCell);

    const setCellNumber = () => {
        dispatch(
            setBoardCell({
                number: number.toUpperCase() === "X" ? 0 : parseInt(number),
                selectedCell: cell
            })
        );
    };

    return (
        <button className="key" onClick={setCellNumber}>
            {number}
        </button>
    );
};

Key.propTypes = {
    number: Proptypes.string
};

export default Key;
