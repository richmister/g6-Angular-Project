import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search-movies-form',
  templateUrl: './search-movies-form.component.html',
  styleUrls: ['./search-movies-form.component.css'],
})
export class SearchMoviesFormComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  
  emitSearch = (form: NgForm) => {
    console.log(form);
    this.searchEvent.emit(form.form.value.searchTerm);
    this.searchEvent.emit(form.form.value.genre);
    this.searchEvent.emit(form.form.value.rating);
  };
}
