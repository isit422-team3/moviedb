import { Component } from '@angular/core';
import { MovieObjectService } from './services/movie-object.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private mos: MovieObjectService) {}

  ngOnInit() {
    this.mos.CreateMovieArray();
  }
  CreateMovieArray
  title = 'moviedb';
}
