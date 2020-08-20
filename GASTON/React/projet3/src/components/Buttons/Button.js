import React from 'react';

const Button = (props) => {
    const typeBtn = `btn ${props.type}`;
    return (

        <button
            className={typeBtn}
            onClick={props.clic}
            style={props.estSelect ? { opacity: 1 } : { opacity: 0.7 }}
        >
            {props.children}

        </button>

    );

}

export default Button;
