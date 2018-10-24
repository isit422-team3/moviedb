import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SiteMovieModel } from './db-client.service';
@Injectable({
  providedIn: 'root'
})
//Service that converts api data into movie objects for display.
export class MovieObjectService {
  public imagePrefix:string;
  public movieArray: [{}]

  constructor(private api: ApiService) {
    this.api.getImageConfigs().subscribe((response) => {
      this.imagePrefix = response["images"].secure_base_url + response["images"].backdrop_sizes[0];
    })  
  }

  CreateMovieArray() {
    
    let topMovies = this.api.getTopMovies();

    return new Promise(resolve => {
      topMovies.subscribe((response: any) => {
        let localMovieArray = [];
        for(let mov of response.results) {
          this.api.getMovieDetails(mov.id).subscribe((response) => {
            let movieObject = new SiteMovieModel();
            movieObject._id = response["id"];
            movieObject.rating = response["vote_average"];
            movieObject.rating_count = response["vote_count"];
            movieObject.title = response["title"];
            movieObject.link = response["homepage"];
            movieObject.background = this.imagePrefix + response["backdrop_path"];
            localMovieArray.push(movieObject);   
      })
    }
    resolve(localMovieArray);
  })
  });
   
  }
}
