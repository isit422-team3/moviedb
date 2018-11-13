import { Component, OnInit } from '@angular/core';
import { MovieObjectService } from '../services/movie-object.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  topMovielist;
  worstMovieList;
  inTheatresList;
  comedyMovieList;

  constructor(private mos: MovieObjectService) { }

  ngOnInit() {
    this.mos.CreateTopMovieArray()
      .then((data) => this.topMovielist = data);
    this.mos.CreateWorstMovieArray()
      .then((data) => this.worstMovieList = data);
    this.mos.CreateInTheatresArray()
    .then((data) => this.inTheatresList = data);
    this.mos.CreateGenreArray(35)
    .then((data) => this.comedyMovieList = data);
  }

}
