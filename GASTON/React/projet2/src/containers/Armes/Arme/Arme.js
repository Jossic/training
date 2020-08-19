import React from 'react';

const Arme = (props) => {
    return (
        <>
            <div>
                <img src={props.imageArme} alt={props.children} />
            </div>
            <div>{props.children}</div>

        </>
    );

}

export default Arme;
