import React, { useState } from 'react';
import Car from './components/Car';
import TunerBoard from './components/TunerBoard';

function App() {

  const [carStyle, setCarStyle] = useState({
    height: '110px',
    width: '435px',
    backgroundColor: 'rgb(0, 210, 100)',
    borderRadius: '50% 10px 25% 10px'
  });

  const [wheelsStyle, setWheelsStyle] = useState({
    width: '80%',
    height: '80%',
    margin: '10%',
    backgroundColor: '#ddd',
    borderRadius: '50%'
  })

  const [spoilerBaseStyle, setSpoilerBaseStyle] = useState({
    height: '30px',
    width: '10px',
    transform: 'rotate(200deg)',
    backgroundColor: '#333'
  })

  const [spoilerWingStyle, setSpoilerWingStyle] = useState({
    height: '10px',
    width: '50px',
    position: 'absolute',
    bottom: '-5px',
    left: 'calc(50% - 25px)',
    backgroundColor: '#222',
    transform: 'rotate(-30deg)'
  })

  console.log(spoilerWingStyle);
  return (
    <React.Fragment>
      <Car
        carStyleProp={carStyle}
        spoilerBaseStyleProp={spoilerBaseStyle}
        spoilerWingStyleProp={spoilerWingStyle}
        wheelsStyleProp={wheelsStyle}

      />
      <TunerBoard
        carStyle={(backgroundColor) => setCarStyle(prevCarStyle => {
          return { ...prevCarStyle, backgroundColor }
        })}
        wheelsStyle={(height, width, margin) => setWheelsStyle(prevWheelsStyle => {
          return { ...prevWheelsStyle, height, width, margin }
        })}
        spoilerBaseStyle={(height, width, transform) => setSpoilerBaseStyle({ height, width, transform })}
        spoilerWingStyle={(height, width, transform) => setSpoilerWingStyle(prevState => {
          return { ...prevState, height, width, transform /*, right: `-${Number(width.replace('px', '')) + 2}px` */ }
        })}
      />
    </React.Fragment>
  );
}

export default App;
