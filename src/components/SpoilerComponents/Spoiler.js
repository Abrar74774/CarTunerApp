import React from 'react';



function Spoiler(props) {
    return (
        <div className="spoiler" style={props.spoilerBaseStyle}>
            <div style={props.spoilerWingStyle}>
            </div>
        </div>
    )
}

export default Spoiler;