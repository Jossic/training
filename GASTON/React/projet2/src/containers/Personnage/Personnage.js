import React from 'react';
import ImagePerso from './ImagePerso';
import CaracPerso from './CaracPerso';

const Personnage = (props) => {
    return (
        <>
            <div className="row no-gutters">
                <div className="col-6">
                    <ImagePerso
                        numImg={props.image}
                        flecheGauche={props.precedente}
                        flecheDroite={props.suivante}
                    />
                </div>
                <CaracPerso
                    nbPointDispo={props.nbPointDispo}
                    force={props.force}
                    agi={props.agi}
                    intel={props.intel}
                    moins={props.moins}
                    plus={props.plus} />
            </div>
        </>
    );

}

export default Personnage;

