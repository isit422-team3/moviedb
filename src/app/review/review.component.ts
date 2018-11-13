import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieObjectService } from '../services/movie-object.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
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
    console.log(data)});
  }

}
