import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {
  apiKey: string = "12fe37a37575f4829dd551a29ad20358";

  constructor(private http: HttpClient) {}

  printToConsole(arg) {
    console.log(arg);
  }

  TestAPICall() {
    let theatreMovies = this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.apiKey)
    theatreMovies.subscribe((response) => this.printToConsole(response));
  }
}

