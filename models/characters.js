module.exports = (sequelize, type) => {
    return sequelize.define('character', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        picture: type.BLOB,
        name: type.STRING,
        age: type.INTEGER,
        weight: type.FLOAT,
        history: type.TEXT,
        relatedMovies: type.STRING
    })
};