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
import React from 'react';
import classes from './fleche.module.css'

const ImagePerso = (props) => {
    let imageToPrint = "";
    if (props.numImg === 1) imageToPrint = ImagePlayer1;
    else if (props.numImg === 2) imageToPrint = ImagePlayer2;
    else if (props.numImg === 3) imageToPrint = ImagePlayer3;
    else if (props.numImg === 4) imageToPrint = ImagePlayer4;
    else if (props.numImg === 5) imageToPrint = ImagePlayer5;
    else if (props.numImg === 6) imageToPrint = ImagePlayer6;
    else if (props.numImg === 7) imageToPrint = ImagePlayer7;
    else if (props.numImg === 8) imageToPrint = ImagePlayer8;
    else if (props.numImg === 9) imageToPrint = ImagePlayer9;
    else if (props.numImg === 10) imageToPrint = ImagePlayer10;
    else if (props.numImg === 11) imageToPrint = ImagePlayer11;


    return (
        <>
            <div className="row no-gutters text-center align-items-center">
                <div className={["col-1", classes.flecheGauche].join(' ')}></div>
                <div className="col"><img src={imageToPrint} alt={imageToPrint} width="300px" /></div>
                <div className={["col-1", classes.flecheDroite].join(' ')}></div>
            </div>
        </>
    );

}

export default ImagePerso;

