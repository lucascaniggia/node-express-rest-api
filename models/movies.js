module.exports = (sequelize, type) => {
    return sequelize.define('movie', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.TEXT,
        score: type.INTEGER,
        director: type.STRING,
        picture: type.BLOB,
        dateOfRelease: type.DATE,
        relatedCharacters: type.STRING
    })
};