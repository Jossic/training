import React from 'react';

const CaracPerso = (props) => {
    return (
        <>
            <div className="col-6">
                Points Restants : <span class="badge badge-success">{props.nbPointDispo}</span> <br />
            Force : {props.force}<br />
            Agi : {props.agi}<br />
            Intel : {props.intel}<br />
            </div>
        </>
    );

}

export default CaracPerso;
