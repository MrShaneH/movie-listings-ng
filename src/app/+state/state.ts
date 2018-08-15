import { Movie, Genre } from '../models/index';

export interface State {
  movies: Movie[];
  genres: Genre[];
  filters: {
    genres: number[],
    rating: number,
  };
}
