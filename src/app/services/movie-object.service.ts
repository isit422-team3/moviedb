import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
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
            let movieObject;
            movieObject.movie_id = response["id"];
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

  CreateTopMovieArray() {
    let topMovies = this.api.getTopMovies();
    return new Promise(resolve => {
      topMovies.subscribe((response: any) => {
        let localMovieArray = [];
        for(let mov of response.results) {
          this.api.getMovieDetails(mov.id).subscribe((response) => {
            let movieObject;
            movieObject.movie_id = response["id"];
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

  CreateWorstMovieArray() {
    let worstMovies = this.api.getWorstMovies();
    return new Promise(resolve => {
      worstMovies.subscribe((response: any) => {
        let localMovieArray = [];
        for(let mov of response.results) {
          this.api.getMovieDetails(mov.id).subscribe((response) => {
            let movieObject;
            movieObject.movie_id = response["id"];
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

  CreateInTheatresArray() {
    let worstMovies = this.api.getInTheatresMovies();
    return new Promise(resolve => {
      worstMovies.subscribe((response: any) => {
        let localMovieArray = [];
        for(let mov of response.results) {
          this.api.getMovieDetails(mov.id).subscribe((response) => {
            let movieObject;
            movieObject.movie_id = response["id"];
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

  CreateAllRatingsArray() {
    let allRatings = this.api.getAllRatings();
    return new Promise(resolve => {
      allRatings.subscribe((response: any) => {
        let localMovieArray = [];
        for(let mov of response.results) {
          this.api.getMovieDetails(mov.id).subscribe((response) => {
            let movieObject;
            movieObject.movie_id = response["id"];
            movieObject.rating = response["vote_average"];
            movieObject.rating_count = response["vote_count"];
            movieObject.release = response["release_date"];
            movieObject.description = response["overview"];
            movieObject.genre = response["genres"]["0"].name;
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

  CreateSearchMovieArray(name) {
    let movie = this.api.getSearch(name);
    return new Promise(resolve => {
      movie.subscribe((response: any) => {
        let localMovieArray = [];
        for(let mov of response.results) {
          this.api.getMovieDetails(mov.id).subscribe((response) => {
            let movieObject;
           // console.log("results: " + JSON.stringify(response));
            movieObject.movie_id = response["id"];
            movieObject.rating = response["vote_average"];
            movieObject.rating_count = response["vote_count"];
            movieObject.release = response["release_date"];
            movieObject.description = response["overview"];
            movieObject.genre = response["genres"]["0"].name;
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
