const jwt = require('jsonwebtoken');
const config = require('config');



module.exports = function (req, res, next) {
    //Récupérer le token dans le header
    const token = req.header('x-auth-token');

    //On vérifie qu'il y a bien un token
    if (!token) {
        return res.status(401).json({ msg: 'Pas de token, autorisation refusée' });
    }

    //Vérifier le token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next()
    } catch (e) {
        res.status(401).json({ msg: 'Le token n\'est pas valide' });
    }
}