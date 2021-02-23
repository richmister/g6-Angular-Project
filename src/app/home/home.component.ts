import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieData: any;
  favorites: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAndSetFavorites();
    this.getTrending();
  }

  getTrending = (): void => {
    this.movieService.getTrendingMovies().subscribe((response: any) => {
      console.log(response);
      this.movieData = response;
    });
  };
  onSubmit = (searchTerm: string): void => {
    this.movieService.searchMovies(searchTerm).subscribe((response: any) => {
      this.movieData = response;
    });
  };
  onFavorite = (movie: any): void => {
    this.movieService.toggleFavorites(movie);
    this.getAndSetFavorites();
  };
  getAndSetFavorites = (): void => {
    this.favorites = this.movieService.getFavorites();
  };
  onDiscoverSubmit = (form: NgForm) => {
    this.movieService.discoverMovies(form.form.value).subscribe((response)=>{
      console.log(response);
      this.movieData = response;
    });
  };
}
