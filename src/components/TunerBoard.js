import React from 'react';
import BodyPanel from './BodyPanel'
import WheelsPanel from './WheelsPanel'
import SpoilerPanel from './SpoilerComponents/SpoilerPanel';

function TunerBoard(props) {
    return (
        <div className="tuner-board">
            <BodyPanel carStyle={props.carStyle} />
            <WheelsPanel wheelsStyle={props.wheelsStyle} />
            <SpoilerPanel
                spoilerWingStyle={props.spoilerWingStyle}
                spoilerBaseStyle={props.spoilerBaseStyle}
            />
        </div>
    )
}

export default TunerBoard;