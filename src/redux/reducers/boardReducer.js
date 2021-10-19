import { ActionTypes } from "../constants/actions-types";

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

export const boardReducer = (state = initialBoard, action) => {
    switch (action.type) {
        case ActionTypes.SET_BOARD:
            return [...action.payload];
        case ActionTypes.SET_BOARD_CELL:
            /*
                payload {
                    number: 3,
                    selectedCell: [2,3]
                }
            */
            let board = state;
            board[action.payload.selectedCell[0]][action.payload.selectedCell[1]] = action.payload.number
            return [...board];
        default:
            return state;
    }
}

export const selectedCellReducer = (state = [0, 0], action) => {
    switch (action.type) {
        case ActionTypes.SET_SELECTED_CELL:
            return [...action.payload]
        default:
            return state;
    }
}