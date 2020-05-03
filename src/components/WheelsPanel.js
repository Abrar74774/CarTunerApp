import React from 'react';

function WheelsPanel(props) {

    let handleChange = (e) => {
        let value = e.target.value;
        let margin = (100 - value) / 2
        props.wheelsStyle(`${value}%`, `${value}%`, `${margin}%`)
    }
    return (
        <div className="panel">
            <h2 style={{ textAlign: "center" }}>Wheels</h2>
            <h4>Size</h4>
            <div className="slider-menu">
                <div>Diameter:</div>
                <div>
                    <input
                        type="range"
                        min="50"
                        max="90"
                        step="0.5"
                        defaultValue="80"
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>

        </div>

    )
}

export default WheelsPanel;