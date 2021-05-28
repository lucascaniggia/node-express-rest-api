const Sequelize = require('sequelize');

const MovieModel = require('./models/movies');
const UserModel = require('./models/users');

const sequelize = new Sequelize('MY5lHYJ1S1', 'MY5lHYJ1S1', 'ixfov5M0CR', {
    host: 'remotemysql.com',
    dialect: 'mysql',
})

const Movie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Movie,
    User
}