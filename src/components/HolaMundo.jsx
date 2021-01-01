import React from 'react';

const HolaMundo = () => {
    const Hola = '!Hola Mundo¡';
    const isTrue = true;

    return (
        <div className="HolaMundo">
            <h1>
                {Hola}
            </h1>
            <h2>
                Ejemplo Dos.
            </h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="imagen uno" />
            {isTrue ? <h4>Esto es Verdadero</h4> : <h5>Esto es Falso.</h5>}
            {isTrue && <h4>Soy Verdadero.</h4>}
        </div>
    )
};

export default HolaMundo;