import React from 'react';
import arme1 from '../../assets/images/armes/appel.png';
import arme2 from '../../assets/images/armes/arc.png';
import arme3 from '../../assets/images/armes/epee.png';
import arme4 from '../../assets/images/armes/fleau.png';
import arme5 from '../../assets/images/armes/griffe.png';
import arme6 from '../../assets/images/armes/guide.png';
import arme7 from '../../assets/images/armes/hache.png';
import arme8 from '../../assets/images/armes/pike.png';
import ImagePlayer1 from "../../assets/images/persos/513-5131698_kuroashi-no-sanji.png";
import ImagePlayer2 from "../../assets/images/persos/kisspng-github-website-development-software-developer-prog-neuroplausible-git-and-github-cheat-sheet-5b6862e59b9191.3758795215335677176372.jpg";
import ImagePlayer3 from "../../assets/images/persos/monkey-d-luffy-roronoa-zoro-usopp-franky-tony-tony-chopper-baby-chibi-png-clip-art.png";
import ImagePlayer4 from "../../assets/images/persos/one-piece-icon-personnages-brook-one-piece-brook-illustration-thumbnail.jpg";
import ImagePlayer5 from "../../assets/images/persos/one-piece-icon-personnages-chopper-chopper-illustration-thumbnail.jpg";
import ImagePlayer6 from "../../assets/images/persos/one-piece-icon-personnages-monkey-d-luffey-monkey-d-luffy-illustration.jpg";
import ImagePlayer7 from "../../assets/images/persos/one-piece-icon-personnages-shanks-le-roux-one-piece-shanks-illustration-thumbnail.jpg";
import ImagePlayer8 from "../../assets/images/persos/one-piece-treasure-cruise-monkey-d-luffy-portgas-d-ace-smoker-one-piece.jpg";
import ImagePlayer9 from "../../assets/images/persos/player1.png";
import ImagePlayer10 from "../../assets/images/persos/player2.png";
import ImagePlayer11 from "../../assets/images/persos/player3.png";


const Personnage = (props) => {
    let imgPerso = "";
    if (props.image === 1) imgPerso = ImagePlayer1;
    else if (props.image === 2) imgPerso = ImagePlayer2;
    else if (props.image === 3) imgPerso = ImagePlayer3;
    else if (props.image === 4) imgPerso = ImagePlayer4;
    else if (props.image === 5) imgPerso = ImagePlayer5;
    else if (props.image === 6) imgPerso = ImagePlayer6;
    else if (props.image === 7) imgPerso = ImagePlayer7;
    else if (props.image === 8) imgPerso = ImagePlayer8;
    else if (props.image === 9) imgPerso = ImagePlayer9;
    else if (props.image === 10) imgPerso = ImagePlayer10;
    else if (props.image === 11) imgPerso = ImagePlayer11;

    let imgArme = "";
    if (props.arme === "appel") imgArme = arme1;
    else if (props.arme === "arc") imgArme = arme2;
    else if (props.arme === "epee") imgArme = arme3;
    else if (props.arme === "fleau") imgArme = arme4;
    else if (props.arme === "griffe") imgArme = arme5;
    else if (props.arme === "guide") imgArme = arme6;
    else if (props.arme === "hache") imgArme = arme7;
    else if (props.arme === "pike") imgArme = arme8;

    return (
        <div className="row no-gutters">
            <div className="col-5">
                <img src={imgPerso} alt={imgPerso} width="100px" />
            </div>
            <div className="col-3">
                Force : {props.force} <br />
                Agi : {props.agi} <br />
                Intel : {props.intel} <br />
            </div>
            <div className="col-4">
                <img src={imgArme} alt={imgArme} width="90px" />
            </div>
        </div >
    );

}

export default Personnage;
