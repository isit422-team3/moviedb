const express = require('express');
const router = express.Router();

const dbService = require('./moviedb.service');

router.get('/test', (req, res) => {
    res.send(200, [
        {
            "id": 10, "name": "Ben", "FavoriteMovie": "It Follows"
        }
    ])
});

router.get('/testmovies', (req, res) => {
    dbService.getMovies(req, res);
});

router.post('/movie', (req, res) => {
    dbService.postMovie(req, res);
});

router.post('/a', (req, res) => {
    console.log("calling something");
    dbService.postMovieTest(req, res);
});

module.exports = router;
