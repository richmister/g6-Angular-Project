import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  api_key: string = '8fb9e4a1ca7fb6bda4f2fc9edb0c5e09';
  movieTrendingUrl: string = 'https://api.themoviedb.org/3/trending/movie/week';
  movieSearchUrl: string = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {}
  getTrendingMovies = (): any => {
    return this.http.get(this.movieTrendingUrl, {
      params: {
        api_key: this.api_key,
        limit: '25',
        //  try to make appropiate, dynamic limits
      },
    });
  };

  searchMovies = (searchTerm: string): any => {
    return this.http.get(this.movieSearchUrl, {
      params: {
        api_key: this.api_key,
        query: searchTerm,
      },
    });
  };
}
