import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SiteMovieModel } from './db-client.service';
@Injectable({
  providedIn: 'root'
})
//Service that converts api data into movie objects for display.
export class MovieObjectService {
  imagePrefix:string;
  constructor(private api: ApiService) {
    this.api.getImageConfigs().subscribe((response) => {
      this.imagePrefix = response.images.base_url + response.images.backdrop_sizes[0];
    })  }

  CreateMovieArray() {
    
    let movieArray = [];
    this.api.getTopMovies().subscribe((response) => {
      for(let mov of response.results) {
        this.api.getMovieDetails(mov.id).subscribe((response) => {
        let movieObject = new SiteMovieModel();
        movieObject._id = response.id;
        movieObject.rating = response.vote_average;
        movieObject.rating_count = response.vote_count;
        movieObject.title = response.title;
        movieObject.background = this.imagePrefix + response.backdrop_path;
        movieArray.push(movieObject);
        })
      }
      console.log(movieArray);
    });
  }

  GetImageURL(suffix) {

  }

}

