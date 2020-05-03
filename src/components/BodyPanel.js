import React, { useState } from 'react';

function BodyPanel(props) {
    const [color, setColor] = useState({
        red: 0,
        green: 210,
        blue: 100
    })

    let handleChangeRed = (e) => {
        props.carStyle(`rgb(${e.target.value}, ${color.green}, ${color.blue})`);
    }

    let changeColorToRed = (e) => {
        let value = e.target.value;
        setColor(prevColor => { return { ...prevColor, red: value } });
    }



    let handleChangeGreen = (e) => {
        props.carStyle(`rgb(${color.red}, ${e.target.value}, ${color.blue})`);
    }

    let changeColorToGreen = (e) => {
        let value = e.target.value;
        setColor(prevColor => { return { ...prevColor, green: value } });
    }



    let handleChangeBlue = (e) => {
        props.carStyle(`rgb(${color.red}, ${color.green}, ${e.target.value}`);
    }

    let changeColorToBlue = (e) => {
        let value = e.target.value;
        setColor(prevColor => { return { ...prevColor, blue: value } });
    }
    return (
        <div className="panel">
            <h2 style={{ textAlign: "center" }}>Body</h2>
            <h4>Color</h4>
            <div className="slider-menu">
                <div>
                    Red:<br />Green:<br />Blue:
                </div>
                <div>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        defaultValue="0"
                        onChange={e => handleChangeRed(e)}
                        onMouseUp={e => changeColorToRed(e)}
                    />
                    <input
                        type="range"
                        min="0"
                        max="255"
                        defaultValue="210"
                        onChange={e => handleChangeGreen(e)}
                        onMouseUp={e => changeColorToGreen(e)}
                    />
                    <input
                        type="range"
                        min="0"
                        max="255"
                        defaultValue="100"
                        onChange={e => handleChangeBlue(e)}
                        onMouseUp={e => changeColorToBlue(e)}
                    />
                </div>
            </div>
        </div>
    )
}

export default BodyPanel;