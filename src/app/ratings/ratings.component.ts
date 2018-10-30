import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieObjectService } from '../services/movie-object.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
//import {SiteMovieModel} from '../services/db-client.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  allRatings;
  displayedColumns: string[] = ['title','rating'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private mos: MovieObjectService) { }

  ngOnInit() {
    this.mos.CreateAllRatingsArray()
    .then((data) => this.allRatings = data);
    this.dataSource = new MatTableDataSource<Movie>(RATINGS_DATA);
    this.dataSource.paginator = this.paginator;
  }

}

export interface Movie {
  title: string;
  rating: number;
}

const RATINGS_DATA: Movie[] = [
  {title: 'Dilwale Dulhania Le Jayenge', rating: 9.2},
  {title: 'The Shawshank Redemption', rating: 8.6},
  {title: 'The Godfather', rating: 8.6},
  {title: 'Your Name.', rating: 8.5},
  {title: 'Schindler\'s List', rating: 8.5},
  {title: 'The Godfather: Part II', rating: 8.5},
  {title: 'Spirited Away', rating: 8.5},
  {title: 'Life Is Beautiful', rating: 8.4},
  {title: 'The Green Mile', rating: 8.4},
  {title: 'Pulp Fiction', rating: 8.4},
];
