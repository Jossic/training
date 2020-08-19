import React from 'react';

const Arme = (props) => {
    return (
        <>
            <div>
                <img
                    className={(props.isCurrentArme) ? "border border-dark" : ""}
                    src={props.imageArme}
                    alt={props.children}
                    onClick={props.clic}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div>{props.children}</div>

        </>
    );

}

export default Arme;
