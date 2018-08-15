import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map, tap} from "rxjs/operators";
import { State } from './state';
import {TheMovieDbService} from "../services/themoviedb.service";

@Injectable()
export class StateService {
  private _stateSubject: BehaviorSubject<State>;

  constructor(private _movieService: TheMovieDbService) {
    this._stateSubject = new BehaviorSubject<State>({
      movies: [],
      genres: [],
      filters: {
        genres: [],
        rating: 3
      }
    });
  }

  public loadAll(): void {

    let state: State = this._stateSubject.value;

    this._movieService
      .getCombined()
      .pipe(
        map( (data) => {
          // Requirement: Must only contain genres from the TMDb API that are in the returned movie result set.
          state = {
            ...state,
            movies: data.movies,
            genres: data.movies
              .map( movie => movie.genre_ids) // get all genre_ids from all movies
              .reduce((a, b) => [...a, ...b], []) // flatten into one array
              .filter((el, i, a) => i === a.indexOf(el)) // and remove duplicates
              .map( (usedGenre) => data.genres.filter(genre => genre.id === usedGenre) ) // filter genres by only those in use
              .reduce((a, b) => [...a, ...b], []) // flatten into one array that matches Genre[]
          }
        }),
        map(() => {
          // Requirement: Display a list of movies, each showing their genres
          state = {
            ...state,
            movies: state.movies
              .map((movie) => {
                movie.genres = [];
                movie.genre_ids.forEach(
                  (genre_id) =>  movie.genres.push(state.genres.find((genre) => genre.id === genre_id)));
                return movie;
              })
          }
        }),
        map( () => {
          // Requirement: All genres are selected by default
          state = {
            ...state,
            filters: {
              rating: state.filters.rating,
              genres: state.genres.map( (genre) => {return { id: genre.id, value: true }}  )
            }
          }
        }),
        tap(() => {
          this._stateSubject.next(state);
        })
      ).subscribe();
  }

  public filterGenres(id: number, value: boolean): void {
      let state: State = this._stateSubject.value;
      state = {
        ...state,
        filters: {
          rating: state.filters.rating,
          genres: state.filters.genres.map( (genre) => genre.id === id ? {id, value} : genre)
        }
      };
      this._stateSubject.next(state);
  }

  public getState() {
    return this._stateSubject.asObservable();
  }
}
