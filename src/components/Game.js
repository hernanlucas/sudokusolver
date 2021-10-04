import Board from "./Board";
import Keyboard from "./Keyboard";
import BtnSolve from "./BtnSolve";
import SecondaryActions from "./SecondaryActions";

const Game = () => (
    <div className="main-container">
        <Board />
        <div className="actions">
            <Keyboard /> 
            <BtnSolve text="SOLVE"/>
            <SecondaryActions />
        </div>
    </div>
)

export default Game;