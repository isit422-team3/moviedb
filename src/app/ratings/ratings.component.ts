import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from '../services/api.service';
//import { SiteMovieModel } from '../services/db-client.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})

export class RatingsComponent implements OnInit {
  displayedColumns = ['title', 'rating', 'releaseDate' ];
  popularityDisplayedColumns = ['title', 'rating', 'releaseDate', 'popularity'];
  
  dataSource = new MatTableDataSource();
  dayTrendingDataSource = new MatTableDataSource();
  weekTrendingDataSource = new MatTableDataSource();
  top2018MoviesDataSource = new MatTableDataSource();
  worst2018MoviesDataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllRatings()
      .subscribe((data) => {
        this.dataSource.data = data['results'];
      });
    this.apiService.getMoviesTrendingByDay()
      .subscribe((data) => {
        this.dayTrendingDataSource.data = data['results'];
      });
    this.apiService.getMoviesTrendingByWeek()
      .subscribe((data) => {
        this.weekTrendingDataSource.data = data['results'];
      });
    this.apiService.getTopMovies()
      .subscribe((data) => {
        this.top2018MoviesDataSource.data = data['results'];
      });
    this.apiService.getWorstMovies()
      .subscribe((data) => {
        this.worst2018MoviesDataSource.data = data['results'];
      });

    this.dataSource.paginator = this.paginator;
    this.dayTrendingDataSource.paginator = this.paginator;
    this.weekTrendingDataSource.paginator = this.paginator;
    this.top2018MoviesDataSource.paginator = this.paginator;
    this.worst2018MoviesDataSource.paginator = this.paginator;
  }
}
