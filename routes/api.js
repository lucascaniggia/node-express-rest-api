const router = require('express').Router();

const middlewares = require('./middlewares');
const apiMoviesRouter = require('./api/movies');
const apiUsersRouter = require('./api/users');
const apiCharactersRouter = require('./api/characters');

router.use('/movies', middlewares.checkToken, apiMoviesRouter);
router.use('/users', apiUsersRouter); // /auth
router.use('/characters', apiCharactersRouter);

module.exports = router;