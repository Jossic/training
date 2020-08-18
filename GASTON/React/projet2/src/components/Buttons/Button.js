import React from 'react';

const Button = (props) => {
    const typeBtn = `btn ${props.type}`;
    return (

        <button className={typeBtn} onClick={props.clic}>{props.children}</button>

    );

}

export default Button;
