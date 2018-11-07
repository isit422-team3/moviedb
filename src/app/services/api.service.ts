import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//THIS SERVICE MAKES API CALLS
export class ApiService {
  apiKey: string = "12fe37a37575f4829dd551a29ad20358";
  constructor(private http: HttpClient) {}

  printMe(arg) {
    console.log(arg);
  }

  TestAPICall() {
    let theatreMovies = this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.apiKey);
    theatreMovies.subscribe((response) => this.printMe(response));
  }

  getTopMovies() {
    let movie = this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&primary_release_year=2018&include_adult=false&page=1&region=US&sort_by=popularity.desc');
    //movie.subscribe((response) => this.printMe(response));
    return movie;
  }

  getWorstMovies() {
    let movie = this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&primary_release_year=2018&include_adult=false&page=1&region=US&sort_by=popularity.asc');
    //movie.subscribe((response) => this.printMe(response));
    return movie;
  }

  getInTheatresMovies() {
    let movie = this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&primary_release_date.gte=2018-10-15&primary_release_date.lte=2018-11-15');
    //movie.subscribe((response) => this.printMe(response));
    return movie;
  }

  getMovieDetails(id) {
    let details = this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey);
    //details.subscribe((response) => this.printMe(response));
    return details
  }

  getImageConfigs() {
    let configs = this.http.get('https://api.themoviedb.org/3/configuration?api_key='+this.apiKey);
    return configs;
  }

  getAllRatings() {
    let ratings = this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&certification_country=US&vote_count.gte=1000&sort_by=vote_average.desc');
    return ratings;
  }

  getSearch(name) {
    let movie = this.http.get('https://api.themoviedb.org/3/search/movie?api_key='+this.apiKey+'&query='+name);
    return movie;
  }
}

