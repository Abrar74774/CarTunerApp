import React from 'react';

let height = {
    bottom: '-15px'
}

function Wheels(props) {
    return (
        <React.Fragment>
            <div className="front-wheel" style={height}>
                <div style={props.wheelsStyle}></div>
            </div>
            <div className="rear-wheel" style={height}>
                <div style={props.wheelsStyle}></div>
            </div>
        </React.Fragment>
    )
}

export default Wheels;
