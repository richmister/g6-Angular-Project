import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieData: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  getTrending = (): void => {
    this.movieService.getTrendingMovies().subscribe((response: any) => {
      console.log(response);
      this.movieData = response;
    });
  };
}
