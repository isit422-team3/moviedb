import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//THIS SERVICE DEALS WITH TALKING TO OUR DB...
export class DbClientService {
  constructor() {
  }
}

//Classes for differnt models

export class SiteMovieModel {
  movie_id: number; 
  title: string;
  rating: number;
  rating_count: number;
  review_count: number;
  background: string;
  link: string;
}

export class UserModel {
  user_id: number; 
  name: string;
  username: string;
  password: string;
  phone_number: string;
  movie_favorites: number[];
  location: number;
  profile_picture: number;
  biography: number;
  ratings: string[];
  rating_count: number;
  reviews: string[];
  review_count: number;
  status: string;
  settings: {};
}

export class review {
  author_id: number; 
  review_id: number;
  movie_id: number;
  rating_up: string;
  rating_down: number;
  helpfull_score: number[];
}
