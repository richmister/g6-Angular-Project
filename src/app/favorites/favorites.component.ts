import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAndSetFavorites();
  }
  getAndSetFavorites = (): void => {
    this.favorites = this.movieService.getFavorites();
  };
}
