import React from 'react';

const Button = (props) => {
    const typeBtn = `btn ${props.type}`;
    return (

        <button className={typeBtn}>{props.children}</button>

    );

}

export default Button;
