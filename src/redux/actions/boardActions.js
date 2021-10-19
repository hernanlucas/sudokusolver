import { ActionTypes } from "../constants/actions-types";

export const setSelectedCell = cell => {
    return {
        type: ActionTypes.SET_SELECTED_CELL,
        payload: cell
    };
};

export const setBoard = board => {
    return {
        type: ActionTypes.SET_BOARD,
        payload: board
    };
};

export const setBoardCell = newCell => {
    return {
        type: ActionTypes.SET_BOARD_CELL,
        payload: newCell
    };
};
