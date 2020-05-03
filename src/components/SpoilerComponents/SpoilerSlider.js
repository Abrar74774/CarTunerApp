import React from 'react';

function SpoilerSlider(props) {

    const [style, setStyle] = React.useState(props.defaults);

    const changeHeight = (event) => {
        let value = event.target.value;
        props.spoilerStyle(`${value}px`, `${style.width}px`, `rotate(${style.angle}deg)`);
        setStyle(prevState => {
            return { ...prevState, height: value }
        })
    }

    const changeWidth = (event) => {
        let value = event.target.value;
        props.spoilerStyle(`${style.height}px`, `${value}px`, `rotate(${style.angle}deg)`);
        setStyle(prevState => {
            return { ...prevState, width: value }
        })
    }

    const changeAngle = (event) => {
        let value = event.target.value;
        props.spoilerStyle(`${style.height}px`, `${style.width}px`, `rotate(${value}deg)`);
        setStyle(prevState => {
            return { ...prevState, angle: value }
        })
    }

    return (
        <React.Fragment>
            <h4>{props.title}</h4>
            <div className="slider-menu">
                <div>
                    Height:<br />Width:<br />Angle:<br />
                </div>
                <div>
                    <input
                        type="range"
                        max="100"
                        min="0"
                        defaultValue={props.defaults.height}
                        onChange={event => changeHeight(event)}
                    />
                    <input
                        type="range"
                        max="100"
                        min="0"
                        defaultValue={props.defaults.width}
                        onChange={event => changeWidth(event)}
                    />
                    <input
                        type="range"
                        min={props.defaults.angle - 90}
                        max={props.defaults.angle + 90}
                        defaultValue={props.defaults.angle}
                        onChange={event => changeAngle(event)}
                    />
                </div>
            </div>

        </React.Fragment>
    )
}

export default SpoilerSlider;