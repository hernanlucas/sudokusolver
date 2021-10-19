import { useSelector, useDispatch } from 'react-redux';
import { setBoard } from '../redux/actions/boardActions';

const BtnSolve = ({ text }) => {

    const stateBoard = useSelector(state => state.board);
    const dispatch = useDispatch();

    const handleSolveBtn = () => {
        let boardSolved = solveBoard();
        dispatch(setBoard(boardSolved));
    }

    // TODO MEJORAR
    const solveBoard = () => {
        let board = stateBoard;
        let solved = false;

        let check = (y, x, n) => {
            let checkX = 0;
            let checkY = 0;

            // se fija por filas
            for (checkX = 0; checkX < 9; checkX++) {
                if (board[y][checkX] === n) return false;
            }

            // se fija por columnas
            for (checkY = 0; checkY < 9; checkY++) {
                if (board[checkY][x] === n) return false;
            }

            // se fija por cuadrante
            let cuadranteXInit = parseInt(x / 3) * 3;
            let cuadranteYInit = parseInt(y / 3) * 3;
            for (checkY = cuadranteYInit; checkY < cuadranteYInit + 3; checkY++) {
                for (checkX = cuadranteXInit; checkX < cuadranteXInit + 3; checkX++) {
                    if (board[checkY][checkX] === n) return false;
                }
            }

            return true;
        }

        const clone = arr => {
            return arr.map(a => [...a]);
        }

        const solve = () => {
            for (let y = 0; y < 9; y++) {
                for (let x = 0; x < 9; x++) {
                    if (board[y][x] === 0) {
                        for (let n = 1; n < 10; n++) {
                            if (check(y, x, n)) {
                                let boardBefore = clone(board);
                                board[y][x] = n;

                                if (solved === false) {
                                    solved = true;
                                    board.map(row => {
                                        if (row.includes(0)) {
                                            solved = false;
                                            return
                                        }
                                    });

                                }
                                solve();
                                if (solved === true) {
                                    return board;
                                }
                                board = clone(boardBefore);
                            }
                        }
                        return;
                    }
                }
            }
        }


        let boardSolved = solve();
        if (solved) return boardSolved;
        else return stateBoard;
    }

    return (
        <button className="btn-solve" onClick={handleSolveBtn}>{text}</button>
    );
}


export default BtnSolve;