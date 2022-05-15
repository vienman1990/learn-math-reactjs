export function Start (props) {

    return (
        <div className="start">
            <h3>1 + 2 = ?</h3>
            <button onClick={() => props.runStart() }>Start</button>
        </div>
    );
}