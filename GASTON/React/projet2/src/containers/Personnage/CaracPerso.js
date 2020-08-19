import React from 'react';
import Carac from './Carac'

const CaracPerso = (props) => {
    return (
        <>
            <div className="col-6">
                Points Restants : <span class="badge badge-success">{props.nbPointDispo}</span> <br />
                <Carac nbPoints={props.force}>Force</Carac>
                <Carac nbPoints={props.agi}>Agi</Carac>
                <Carac nbPoints={props.intel}>Intel</Carac>


            </div>
        </>
    );

}

export default CaracPerso;
