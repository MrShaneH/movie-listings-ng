import {Movie, Genre} from "../models";

export interface State {
  movies: Movie[];
  genres: Genre[];
  filters: {
    genres: Array<{id: number, value: boolean}>,
    rating: number,
  }
}
