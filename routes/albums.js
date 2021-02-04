const express = require('express');
const router = express.Router();

const db = require('../database')

const getAlbums = async () => {
    try {
        return await db.Album.findAll()
    } catch (e) {
        return null;
    }
}

// read
router.get('/', async function (req, res) {
    res.render('albums', {
        albums: await getAlbums()
    });
});


// create
router.post('/create', async function (req, res) {
    const {name, bandName} = req.body;
    const album = await db.Album.create({name, bandName});
    res.redirect('/albums');
});

// update
router.post('/update', async function (req, res) {
   const { id, name, bandName} = req.body;
   await db.Album.update({name, bandName}, {where: {id} });
   res.redirect('/albums');
});


// delete
router.post('/delete', async function (req, res) {
   const { id } = req.body;
   await db.Album.destroy({ where: { id } });
    res.redirect('/albums');
});

module.exports = router;
