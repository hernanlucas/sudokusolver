import { combineReducers } from "redux";
import { boardReducer, selectedCellReducer } from "./boardReducer";

const reducers = combineReducers({
    board: boardReducer,
    selectedCell: selectedCellReducer
});

export default reducers;
