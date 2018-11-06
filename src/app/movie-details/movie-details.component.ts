import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieObjectService } from '../services/movie-object.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  allRatings;
  displayedColumns: string[] = ['title','rating','link','background'];
  dataSource;
  movie;
  search;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mos: MovieObjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((movie) => this.movie = movie);
    this.mos.CreateSearchMovieArray(this.movie.name)
    .then((data) => {this.allRatings = data;
    console.log(data);
  });
    
  }
}

export interface Movie {
  title: string;
  rating: number;
  link: string;
  background: string;
}
