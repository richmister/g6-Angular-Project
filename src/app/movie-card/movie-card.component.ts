import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Output() favoriteEvent = new EventEmitter<any>();
  @Input() movieRef: any;
  @Input() favoritesRef: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  emitFavoriteEvent = (movie: any): void => {
    this.favoriteEvent.emit(movie);
    console.log(movie);
  };
}
