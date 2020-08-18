import React from 'react';
import ImagePerso from './ImagePerso'

const Personnage = (props) => {
    return (
        <>
            <div className="row no-gutters">
                <div className="col-6">Image : <ImagePerso numImg={props.image} /></div>
                <div className="col-6">Force : {props.force}<br />Agi : {props.agi}<br />Intel : {props.intel}<br /></div>
            </div>
        </>
    );

}

export default Personnage;

