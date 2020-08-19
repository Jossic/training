import React from 'react';
import classes from './Carac.module.css'

const Carac = (props) => {
    let carre = [];
    for (let index = 0; index < props.nbPoints; index++) {
        carre.push(<div key={index} className={classes.points}></div>)

    }
    return (
        <>
            <div className="row no-gutters">
                <div className={[classes.moins, classes.signe].join(' ')} onClick={props.moins}></div>
                <div>{props.children} : </div>{carre}
                <div className={[classes.plus, classes.signe].join(' ')} onClick={props.plus}></div>
            </div>

        </>
    );

}

export default Carac;
