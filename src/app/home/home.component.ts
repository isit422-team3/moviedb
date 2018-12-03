import { Component, OnInit } from '@angular/core';
import { MovieObjectService } from '../services/movie-object.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topMovielist;

  constructor(private mos: MovieObjectService) { }

  ngOnInit() {
    this.mos.CreateTopMovieArray()
      .then((data) => this.topMovielist = data);
  }

}
