import React from 'react';
import SpoilerSlider from './SpoilerSlider';

function SpoilerPanel(props) {

    return (
        <div className="panel">
            <h2 style={{ textAlign: "center" }}>Spoiler</h2>
            <SpoilerSlider
                title="Base"
                defaults={{ height: 30, width: 10, angle: 200 }}
                spoilerStyle={props.spoilerBaseStyle}
            />
            <SpoilerSlider
                title="Wing"
                defaults={{ height: 10, width: 50, angle: -30 }}
                spoilerStyle={props.spoilerWingStyle}
            />
        </div>
    )
}

export default SpoilerPanel;