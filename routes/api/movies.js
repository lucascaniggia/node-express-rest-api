const router = require('express').Router();

const { Movie } = require('../../database')

router.get('/', async (req,res) => {
    console.log(req.usuarioId);
    const movies = await Movie.findAll();
    res.json(movies);
});

router.post('/', async (req,res) => {
    const movie = await Movie.create(req.body);
    res.json(movie);
});

router.put('/:movieId', async (req,res) => {
    await Movie.update(req.body, {
        where: { id: req.params.movieId }
    });
    res.json({ success: 'Se ha modificado' })
});

router.delete('/:movieId', async (req,res) => {
    await Movie.destroy({
        where: { id: req.params.movieId }
    });
    res.json({ success: 'Se ha borrado la película' });
});

module.exports = router;