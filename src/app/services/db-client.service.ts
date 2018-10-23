import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//THIS SERVICE DEALS WITH TALKING TO OUR DB
export class DbClientService {
  constructor() {
  }
}

//Classes for differnt models

export class SiteMovieModel {
  _id: number; 
  title: string;
  rating: number;
  rating_count: number;
  review_count: number;
  background: string;
  link: string;
}


// To be finished in another sprint
// export class SiteUserModel {

//}
