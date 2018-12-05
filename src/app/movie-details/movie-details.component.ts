import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieObjectService } from '../services/movie-object.service';
import { DbClientService } from '../services/db-client.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  allRatings;
  //displayedColumns: string[] = ['title','rating','link','background'];
  //dataSource;
  movie;
  search;
  reviewTest = {
    review_id: 1, 
    author_id: 1,
    movie_id: 157336,
    title: 'Greatest movie ever',
    rating_up: 5,
    rating_down: 0,
    review_score: 5
};

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mos: MovieObjectService, private route: ActivatedRoute, private db: DbClientService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((movie) => this.movie = movie);
    this.mos.CreateSearchMovieArray(this.movie.name)
    .then((data) => {this.allRatings = data;
    console.log(data);
    });
    
  }

  reviewTestBtn() {
    this.db.addReview(this.reviewTest);
    console.log("Review added!");
  }
}

// export interface Movie {
//   title: string;
//   rating: number;
//   link: string;
//   background: string;
// }


// addReview(review: Review) {
//   return this.http.post<Review>(`${api}/review`, review);
// };
