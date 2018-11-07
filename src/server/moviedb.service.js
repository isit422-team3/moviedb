const Movie = require('./models/movie.model');
const User = require('./models/user.model');
const Review = require('./models/Review.model');

require('./mongo').connect();

function getMovies(req, res) {
    const docquery = Movie.find({});
    docquery
      .exec()
      .then(movies => {
          res.status(200).json(heroes);
      })
      .catch(error => {
          res.status(500).send(error);
          return;
      });
}


function postMovie(req, res) {
    const inMov = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        rating: req.body.rating,
        rating_count: req.body.rating_count,
        reviews: req.body.reviews,
        review_count: req.body.review_count,
        api_link: req.body.api_link
    };
    const movie = new Movie(inMov);
    movie.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(movie);
        console.log('movie created successfully!');
    });
}

function postMovieTest(res) {
    console.log('hello');
    const inMov = {
        movie_id: 1,
        title: "TestMovieTitle1",
        api_link: "req.body.api_link"
    };
    const movie = new Movie(inMov);
    movie.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(movie);
        console.log('test movie created successfully!');
    });
}

function checkServerError(res, error) {
    if (error) {
        res.stats(500).send(error);
        return error;
    } 
}


module.exports = {
    getMovies,
    postMovie,
    postMovieTest
}
    // dbs.collection('Movies').find({}).toArray((err, docs) => {
    //     if (err) {
    //         console.log(err);
    //         res.error(err);
    //     } else {
    //         res.json(docs)
    //     }
    // });
//}
