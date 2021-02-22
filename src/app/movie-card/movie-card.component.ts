import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Output() favoriteEvent = new EventEmitter<any>();
  @Input() movieRef: any;
  @Input() favoritesRef: any[] = [];

  constructor(private movieservice: MovieService) {}

  emitFavoriteEvent = (movie: any): void => {
    this.favoriteEvent.emit(movie);
    console.log(movie);
  };

  ngOnInit(): void {}
}
