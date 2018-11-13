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
  displayedColumns = ['title', 'rating', 'releaseDate'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
    this.apiService.getAllRatings()
    .subscribe((data) => {
      this.dataSource.data = data['results'];
    });
    this.dataSource.paginator = this.paginator;
  }
}
