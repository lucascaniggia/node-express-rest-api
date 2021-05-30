const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {

    if(!req.headers['user-token']) {
        return res.json({ error: 'You need to include token in header' });
    } 

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'secret phrase');
    } catch (err) {
        return res.json({ error: 'Wrong token' });
    }

    if(payload.expiredAt < moment().unix()) {
        return res.json({ error: 'Token has expired' });
    }

    req.usuarioId = payload.usuarioId;

    next();
}

module.exports = {
    checkToken:  checkToken
}