export function Result (props) {

    let point = 0;

    let listShow = props.list.map(function(item, key){

        if (item.check()) point++;

        return (
            <h3 key={key} dangerouslySetInnerHTML={{__html: item.getShow()}} ></h3>
        );
    });

    return (
        <div className="result">
            {listShow}
            <hr />
            <h3>Point: {point}</h3>

            <button onClick={ () => props.runStart()}>Restart</button>
        </div>
    );
}