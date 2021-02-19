import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  api_key:string = "8fb9e4a1ca7fb6bda4f2fc9edb0c5e09";
  tmdbTrendingUrl:string = "https://api.themoviedb.org/3/trending/movie/week";
  tmdbSearchUrl:string = "https://api.themoviedb.org/3/search/movie";
  

  constructor() { }
}
