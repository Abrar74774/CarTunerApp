import React from 'react';
import Spoiler from './SpoilerComponents/Spoiler';
import Wheels from './Wheels';


function Car(props) {
    return (
        <div style={props.carStyleProp} className="car">
            <div className="cabin">
                <div className="cabin-front"></div>
                <div className="cabin-rear"></div>
            </div>
            <Spoiler spoilerBaseStyle={props.spoilerBaseStyleProp} spoilerWingStyle={props.spoilerWingStyleProp} />
            <Wheels wheelsStyle={props.wheelsStyleProp} />
        </div>
    )
}

export default Car;