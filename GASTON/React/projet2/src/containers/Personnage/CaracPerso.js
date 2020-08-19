import React from 'react';
import Carac from './Carac'

const CaracPerso = (props) => {
    return (
        <>
            <div className="col-6">
                Points Restants : <span class="badge badge-success">{props.nbPointDispo}</span> <br />
                <Carac
                    nbPoints={props.force}
                    moins={() => props.enleverPoint('force')}
                    plus={() => props.ajouterPoint('force')}
                >Force</Carac>
                <Carac
                    nbPoints={props.agi}
                    moins={() => props.enleverPoint('agi')}
                    plus={() => props.ajouterPoint('agi')}
                >Agi</Carac>
                <Carac
                    nbPoints={props.intel}
                    moins={() => props.enleverPoint('intel')}
                    plus={() => props.ajouterPoint('intel')}
                >Intel</Carac>


            </div>
        </>
    );

}

export default CaracPerso;
