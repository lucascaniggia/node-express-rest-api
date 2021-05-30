// checkear
const router = require('express').Router();

const { Character } = require('../../database')

router.get('/', async (req,res) => {
    console.log(req.usuarioId);
    const characters = await Character.findAll();
    res.json(characters);
});

router.post('/', async (req,res) => {
    const character = await Character.create(req.body);
    res.json(character);
});

router.put('/:characterId', async (req,res) => {
    await Character.update(req.body, {
        where: { id: req.params.characterId }
    });
    res.json({ success: 'El personaje se ha modificado' })
});

router.delete('/:characterId', async (req,res) => {
    await Character.destroy({
        where: { id: req.params.characterId }
    });
    res.json({ success: 'Se ha borrado el personaje' });
});

module.exports = router;