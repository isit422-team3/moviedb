import { Component, OnInit } from '@angular/core';
import { MovieObjectService } from '../services/movie-object.service';

@Component({
  selector: 'app-movie-scroller',
  templateUrl: './movie-scroller.component.html',
  styleUrls: ['./movie-scroller.component.scss']
})
export class MovieScrollerComponent implements OnInit {
  movielist;

  constructor(private mos: MovieObjectService) { }

  ngOnInit() {
    this.mos.CreateMovieArray()
      .then((data) => this.movielist = data);
  }

}
