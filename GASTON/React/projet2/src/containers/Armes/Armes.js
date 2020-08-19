import React from 'react';
import Arme from './Arme/Arme'
import arme1 from '../../assets/images/armes/appel.png';
import arme2 from '../../assets/images/armes/arc.png';
import arme3 from '../../assets/images/armes/epee.png';
import arme4 from '../../assets/images/armes/fleau.png';
import arme5 from '../../assets/images/armes/griffe.png';
import arme6 from '../../assets/images/armes/guide.png';
import arme7 from '../../assets/images/armes/hache.png';
import arme8 from '../../assets/images/armes/pike.png';


const Armes = (props) => (
    <div className="row no-gutters text-center">
        {props.listeArmes.map((arme) => {
            let imgArme;
            switch (arme) {
                case "appel": imgArme = arme1;
                    break;
                case "arc": imgArme = arme2;
                    break;
                case "epee": imgArme = arme3;
                    break;
                case "fleau": imgArme = arme4;
                    break;
                case "griffe": imgArme = arme5;
                    break;
                case "guide": imgArme = arme6;
                    break;
                case "hache": imgArme = arme7;
                    break;
                case "pike": imgArme = arme8;
                    break;
                default: console.log('erreur');
            }
            return (
                <div className="col" key={arme}>
                    <Arme
                        imageArme={imgArme}
                        isCurrentArme={props.currentArme === arme}
                        clic={() => props.changeArme(arme)}
                    >{arme}</Arme>
                </div>
            )
        })}


    </div>


);

export default Armes