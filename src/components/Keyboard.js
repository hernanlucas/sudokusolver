import Key from './Key';

const Keyboard = () => {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "X"];

    return (
        <div className="keyboard">
            {keys.map(keyName => (
                <Key key={keyName} text={keyName} />
            ))}
            
        </div>
    )
}


export default Keyboard;