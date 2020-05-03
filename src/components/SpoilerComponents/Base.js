import React from 'react';

function Base(props) {

    const [style, setStyle] = React.useState({
        height: 100,
        width: 10,
        angle: 200
    })

    const changeHeight = (event) => {
        let value = event.target.value;
        props.spoilerBaseStyle(value, style.width, style.angle);
        setStyle(prevState => {
            return { ...prevState, height: value }
        })
    }

    const changeWidth = (event) => {
        let value = event.target.value;
        props.spoilerBaseStyle(style.height, value, style.angle);
        setStyle(prevState => {
            return { ...prevState, width: value }
        })
    }

    const changeAngle = (event) => {
        let value = event.target.value;
        props.spoilerBaseStyle(style.height, style.baseWidth, value);
        setStyle(prevState => {
            return { ...prevState, angle: value }
        })
    }

    return (
        <React.Fragment>
            <h4>Wing</h4>
            <label>Height:&nbsp;&nbsp;</label>
            <input
                type="range"
                max="150"
                min="0"
                defaultValue="30"
                onChange={event => changeHeight(event)}
            />
            <label>Width :&nbsp;&nbsp;</label>
            <input
                type="range"
                max="50"
                min="0"
                defaultValue="10"
                onChange={event => changeWidth(event)}
            />
            <label>Angle :&nbsp;&nbsp;</label>
            <input
                type="range"
                max="180"
                min="-180"
                defaultValue="200"
                onChange={event => changeAngle(event)}
            />
        </React.Fragment>
    )
}

export default Base;