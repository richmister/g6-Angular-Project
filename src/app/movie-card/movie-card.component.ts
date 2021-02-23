import { NgStyle } from '@angular/common';
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
  isHidden:boolean = false;
  favorited: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  emitFavoriteEvent = (movie: any): void => {
    this.favoriteEvent.emit(movie);
  };

  toggleInfo = ():void => {
    this.isHidden = !this.isHidden;
  }

  checkFavorite = (movie: any):boolean => {
    return this.favoritesRef.some((item)=>{
      return item.id === movie.id;
    })
  }
}
