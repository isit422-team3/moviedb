import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, DBMovie, Review } from '../models';

const api = '/api';


@Injectable()

//THIS SERVICE DEALS WITH TALKING TO OUR DB...

export class DbClientService {
  constructor(private http: HttpClient) {}
  
  //MOVIE METHODS:
  getMovies() {
    return this.http.get<Array<DBMovie>>(`${api}/movies`)
  }
  getMovie(movie: DBMovie) {
    return this.http.get<DBMovie>(`${api}/movie/${movie.movie_id}`)
  }
  deleteMovie(movie: DBMovie) {
    return this.http.delete(`${api}/movie/${movie.movie_id}`);
  }
  addMovie(movie: DBMovie) {
    return this.http.post<DBMovie>(`${api}/movie/`, movie);
  }
  updateMovie(movie: DBMovie) {
    return this.http.put<DBMovie>(`${api}/movie/${movie.movie_id}`, movie);
  }
  ////////////////////////////////////////////////////////////////////////////
  
  //REVIEW METHODS: Note- if you want to get reviews then get the movie object and view its [reviews]
  deleteReview(review: Review) {
    return this.http.delete(`${api}/review/${review.movie_id}/${review.author_id}`);
  }
  addReview(review: Review) {
    return this.http.post<Review>(`${api}/review/`, review);
  }
  updateReview(review: Review) {
    return this.http.put<Review>(`${api}/review/${review.movie_id}/${review.author_id}`, review);
  }
  ////////////////////////////////////////////////////////////////////////////
  
  //USER METHODS
  getUser(user: User) {
    return this.http.get<Array<User>>(`${api}/users/${user.username}`)
  }
  deleteUser(user: User) {
    return this.http.delete(`${api}/user/${user.username}`);
  }
  addUser(user: User) {
    return this.http.post<User>(`${api}/user/`, user);
  }
  updateUser(user: User) {
    return this.http.put<User>(`${api}/user/${user.username}`, user);
  }
}