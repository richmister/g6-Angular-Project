import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-search-movies-form',
  templateUrl: './search-movies-form.component.html',
  styleUrls: ['./search-movies-form.component.css'],
})
export class SearchMoviesFormComponent implements OnInit {

  genres: any = [];
  @Output() searchEvent = new EventEmitter<string>();
  @Output() discoverEvent = new EventEmitter<NgForm>();


  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
  }
  
  emitSearch = (form: NgForm) => {
    console.log(form);
    this.searchEvent.emit(form.form.value.searchTerm);
    this.searchEvent.emit(form.form.value.genre);
    this.searchEvent.emit(form.form.value.rating);
  };
  emitDiscoverEvent = (form: NgForm):void => {
    this.discoverEvent.emit(form);
  };
  getGenres = ():void => {
    this.movieService.getGenres().subscribe((response)=>{
      this.genres = response;
      console.log(response);
    });
  }
}
