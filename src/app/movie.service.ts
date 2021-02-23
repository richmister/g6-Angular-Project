import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  api_key: string = '8fb9e4a1ca7fb6bda4f2fc9edb0c5e09';
  movieTrendingUrl: string = 'https://api.themoviedb.org/3/trending/movie/week';
  movieSearchUrl: string = 'https://api.themoviedb.org/3/search/movie';
  discoverUrl: string = 'https://api.themoviedb.org/3/discover/movie';
  genresUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  favorites: any[] = [];

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
  discoverMovies = (searchObject:any):any => {
    console.log("this works!")
    let params:any = {
      api_key: this.api_key,
      include_adult: false,
    };
    if (searchObject.rating) {
      params["vote_average.gte"] = searchObject.rating
    };
    if (searchObject.genre) {
      params.with_genres = searchObject.genre;
    }
    return this.http.get(this.discoverUrl, {
      params: params
    });
  };
  toggleFavorites = (movie: any): void => {
    let index = this.favorites.findIndex((item) => {
      return item.id === movie.id;
    });
    if (index === -1) {
      this.favorites.push(movie);
    } else {
      this.favorites.splice(index, 1);
    }
  };
  getFavorites = (): any[] => {
    return this.favorites;
  };
  getGenres = ():any => {
    return this.http.get(this.genresUrl, {
      params: {
        api_key: this.api_key
      }
    });
  }
}
