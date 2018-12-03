import { DbClientService } from './db-client.service';

import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DBMovie, Review } from '../models';
import { getRandomString } from 'selenium-webdriver/safari';

const getUsers = function() {
  return [
    {user_id: 1, name: 'Abe', username: 'UniqueUserName', password: 'password', phone_number: '(425)999-9999', movie_favorites: [1], location: 'somewhere', profile_picture: 'noyb', biography: 'was born', ratings: [1], rating_count: 1, reviews: [1], review_count: 1, status: 'not real', settings: ['thing']},
    {user_id: 1, name: 'Bob', username: 'Robert', password: 'abc123', phone_number: '(425)999-9998', movie_favorites: [2], location: 'there', profile_picture: 'I-o-u', biography: 'was created', ratings: [2], rating_count: 1, reviews: [2], review_count: 1, status: 'not real', settings: ['thing']},
    {user_id: 1, name: 'Cin', username: 'Cindy', password: '123456789', phone_number: '(425)999-9997', movie_favorites: [3], location: 'everywhere', profile_picture: ':)', biography: 'unknown', ratings: [3], rating_count: 1, reviews: [3], review_count: 1, status: 'not real', settings: ['thing']}
  ]
}

const getReviews = function () {
    return [
        { movie_id: 1, author_id: 1, title: 'Sucked', review_score: 1, review_id: 1, rating_up: 0, rating_down: 1},
        { movie_id: 2, author_id: 2, title: 'Alright', review_score: 5, review_id: 2, rating_up: 1, rating_down: 1},
        { movie_id: 3, author_id: 3, title: 'Amazing', review_score: 10, review_id: 3, rating_up: 4, rating_down: 0}
      ];
}

const getDummy = function () {
    return [
    { title: 'Braveheart', movie_id: 1, api_link: "", rating: 1, rating_count: 1, reviews: [1], review_count: 1},
    { title: 'It (2018)', movie_id: 2, api_link: "", rating: 1, rating_count: 1, reviews: [1], review_count: 1},
    { title: 'It Follows', movie_id: 3, api_link: "", rating: 1, rating_count: 1, reviews: [1], review_count: 1}
  ];
}

describe('DbClientServices', () => {
    let injector: TestBed;
    let service: DbClientService;
    let httpMock: HttpTestingController;
    
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DbClientService]
      });
      injector = getTestBed();
      service = injector.get(DbClientService);
      httpMock = injector.get(HttpTestingController);
    });

    it('should be created', () => {
        const service: DbClientService = TestBed.get(DbClientService);
        expect(service).toBeTruthy();
    });

    describe('#getMovies', () => {
        let movieArray = getDummy();
        it('should return an Observable<Movie[]>', () => {
            
          service.getMovies().subscribe(movies => {
            expect(movies.length).toBe(3);
            expect(movies).toEqual(movieArray);
          });
      
          const req = httpMock.expectOne(`${service.api}/movies`);
          expect(req.request.method).toBe("GET");
          req.flush(movieArray);
        });
    });

    describe('#getMovie', () => {
        let movieArray = getDummy();

        it('should return an Observable<Movie>', () => {
          const targetMov = movieArray[1];
          service.getMovie(targetMov).subscribe(movie => {
            expect(movie).toEqual(movieArray[1]);
          });

          const req = httpMock.expectOne(`${service.api}/movie/${targetMov.movie_id}`);
          expect(req.request.method).toBe("GET");
          req.flush(targetMov);
        });
    });

    describe('#deleteMovie', () => {
        let movieArray = getDummy();

        it('should remove a movie', () => {
          const targetMov = movieArray[2];
          service.deleteMovie(targetMov).subscribe(movie => {
            expect(movie).toEqual(movieArray[2]);
            for(let i = 0; i <movieArray.length; i++) {
                if(movieArray[i].movie_id===targetMov.movie_id) {
                    delete movieArray[i];
                }
            }
          });
      
          const req = httpMock.expectOne(`${service.api}/movie/${targetMov.movie_id}`);
          expect(req.request.method).toBe("DELETE");
          req.flush(targetMov);
          expect(movieArray).not.toContain(targetMov);
        });
    });

    describe('#addMovie', () => {
        let movieArray = getDummy();

        it('should add a <movie>', () => {
          const movToAdd:DBMovie = { title: 'I Am Legend', movie_id: 4, api_link: "", rating: 1, rating_count: 1, reviews: [1], review_count: 1};
          service.addMovie(movToAdd).subscribe(movie => {
            movieArray.push(movToAdd);
            expect(movie.movie_id).toEqual(4);
          });
          const req = httpMock.expectOne(`${service.api}/movie`, movToAdd.toString());
          expect(req.request.method).toBe("POST");
          req.flush(movToAdd);
          expect(movieArray.length).toBe(4);
          expect(movieArray[3].title).toBe("I Am Legend")
        });
    });

    describe('#updateMovie', () => {
        let movieArray = getDummy();

        it('should change an existing movie', () => {
          const updateMov:DBMovie = { title: 'It Follows Again!', movie_id: 3, api_link: "", rating: 1, rating_count: 1, reviews: [1], review_count: 1 };
          service.updateMovie(updateMov).subscribe(movie => {
            expect(movieArray[2].title).toBe('It Follows');
            movieArray[2] = movie;
            expect(movie).toEqual(movieArray[2]);
          });
      
          const req = httpMock.expectOne(`${service.api}/movie/${movieArray[2].movie_id}`, updateMov.toString());
          expect(req.request.method).toBe("PUT");
          req.flush(updateMov);
          expect(movieArray[2]).toEqual(updateMov);
        });
    });


// /////////////////////////////////////////////////////////////////
// /////////////////////    Reviews    /////////////////////////////
// /////////////////////////////////////////////////////////////////
    describe('#deleteReview', () => {
        let reviewArray = getReviews();
        it('should remove a <Review>', () => {
          const targetRev = reviewArray[0];
          service.deleteReview(targetRev).subscribe(review => {
          expect(review).toEqual(reviewArray[0]);
          for(let i = 0; i <reviewArray.length; i++) {
            if(reviewArray[i].review_id==targetRev.review_id) {
              delete reviewArray[i];
            }
          }
          });
  
          const req = httpMock.expectOne(`${service.api}/review/${targetRev.review_id}`);
          expect(req.request.method).toBe("DELETE");
          req.flush(targetRev);
          expect(reviewArray).not.toContain(targetRev);
        });
    });

    describe('#addReview', () => {
        let reviewArray = getReviews();
        const newRev = { movie_id: 4, author_id: 4, title: 'Made my kids cry!', review_score: 8, review_id: 4, rating_up: 2, rating_down: 1};

        it('should add a <Review>', () => {
          service.addReview(newRev).subscribe(review => {
            reviewArray.push(newRev);
            expect(review.review_id).toEqual(4);
          });
          const req = httpMock.expectOne(`${service.api}/review`, newRev.toString());
          expect(req.request.method).toBe("POST");
          req.flush(newRev);
          expect(reviewArray.length).toBe(4);
          expect(reviewArray[3].title).toBe('Made my kids cry!')
        });
    });

    describe('#updateMovie', () => {
        let reviewArray = getReviews();
        const updateRev = { movie_id: 2, author_id: 2, title: 'Not good!', review_score: 3, review_id: 2, rating_up: 1, rating_down: 1};

        it('should change an existing <Review>', () => {
          service.updateReview(updateRev).subscribe(review => {
            expect(reviewArray[1].review_score).toBe(5);
            reviewArray[1] = review;
          });
          const req = httpMock.expectOne(`${service.api}/review/${reviewArray[1].review_id}`, updateRev.toString());
          expect(req.request.method).toBe("PUT");
          req.flush(updateRev);
          expect(reviewArray[1]).toEqual(updateRev);
        });
    });


// //////////////////////////////////////////////////////////////////
// /////////////////////////   Users   //////////////////////////////
// //////////////////////////////////////////////////////////////////
    describe('#getUser', () => {
        let userArray = getUsers();

        it('should return an Observable<User>', () => {
          const tarUser = userArray[2];
          service.getUser(tarUser).subscribe(user => {
            expect(user).toEqual(userArray[2]);
          });

          const req = httpMock.expectOne(`${service.api}/user/${tarUser.username}`);
          expect(req.request.method).toBe("GET");
          req.flush(tarUser);
        });
    });

    describe('#deleteUser', () => {
      let userArray = getUsers();
      it('should remove a <User>', () => {
        const tarUser = userArray[2];
        service.deleteUser(tarUser).subscribe(user => {
        expect(user).toEqual(userArray[2]);
        for(let i = 0; i <userArray.length; i++) {
          if(userArray[i].username==tarUser.username) {
            delete userArray[i];
          }
        }
        });

        const req = httpMock.expectOne(`${service.api}/user/${tarUser.username}`);
        expect(req.request.method).toBe("DELETE");
        req.flush(tarUser);
        expect(userArray).not.toContain(tarUser);
      });
  });

    describe('#addUser', () => {
        let userArray = getUsers();
        const newUser = {user_id: 4, name: 'Ben', username: 'tyler40k', password: 'abcdefg', phone_number: '(425)922-3766', movie_favorites: [1,2,3], location: 'Redmond, WA', profile_picture: 'N/A', biography: 'I should write a book', ratings: [3], rating_count: 1, reviews: [3], review_count: 1, status: 'programming', settings: ['hello']};

        it('should add a <User>', () => {
          service.addUser(newUser).subscribe(user => {
            userArray.push(newUser);
            expect(user.username).toEqual('tyler40k');
          });
          const req = httpMock.expectOne(`${service.api}/user`, newUser.toString());
          expect(req.request.method).toBe("POST");
          req.flush(newUser);
          expect(userArray.length).toBe(4);
          expect(userArray[3].name).toBe('Ben')
        });
    });

    describe('#updateUser', () => {
      let userArray = getUsers();
      const updateUser = {user_id: 1, name: 'Bob', username: 'Robert', password: 'Secure!?Pa55w0rd@', phone_number: '(425)999-9998', movie_favorites: [2], location: 'there', profile_picture: 'I-o-u', biography: 'was created', ratings: [2], rating_count: 1, reviews: [2], review_count: 1, status: 'not real', settings: ['any string array is okay?']};

      it('should change an existing <User>', () => {
        service.updateUser(updateUser).subscribe(user => {
          expect(userArray[1].password).toBe('abc123');
          userArray[1] = user;
        });
        const req = httpMock.expectOne(`${service.api}/user/${userArray[1].username}`, updateUser.toString());
        expect(req.request.method).toBe("PUT");
        req.flush(updateUser);
        expect(userArray[1]).toEqual(updateUser);
      });
  });

});