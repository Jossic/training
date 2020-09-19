const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    // Récupérer le token du header
    const token = req.header('x-auth-token');

    // Vérifier s'il n'y a pas de token
    if (!token) {
        return res.status(401).json({ msg: 'Pas de token, autorisation refusée' });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token non valide' });;
    }
}
