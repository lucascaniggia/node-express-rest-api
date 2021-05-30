const Sequelize = require('sequelize');

const MovieModel = require('./models/movies');
const UserModel = require('./models/users');
const CharacterModel = require('./models/characters');

const sequelize = new Sequelize('MY5lHYJ1S1', 'MY5lHYJ1S1', 'ixfov5M0CR', {
    host: 'remotemysql.com',
    dialect: 'mysql',
})

const Movie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Character = CharacterModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Sinchronized tables')
    })

module.exports = {
    User,
    Movie,
    Character
}