const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db'
});


const Album = sequelize.define('album', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    name: { allowNull: false, type: Sequelize.TEXT },
    bandName: { allowNull: false, type: Sequelize.TEXT }
});

const Song = sequelize.define('song', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    name: { allowNull: false, type: Sequelize.TEXT },
});


Album.hasMany(Song);

(async () => await sequelize.sync())()
    .then(() => console.log('Database synced'))
    .catch((e) => console.log('Database was not synced', e));

module.exports = { Album, Song };