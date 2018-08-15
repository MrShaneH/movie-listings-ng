import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Movie} from '../../models';
import {StateService} from '../../+state';
import {InitializerService} from '../../app.initializer';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private _stateService: StateService, private _initService: InitializerService) { }

  ngOnInit() {
    this.movies$ = this._stateService
      .getState()
      .pipe(
        map(state => {
          return state.movies
            // Requirement: The user should have the ability to toggle movies depending on all of its assigned genres
            .filter(movie => state.filters.genres.every((checked_genre) => movie.genre_ids.includes(checked_genre)))

            // Requirement: Movies should also be filterable by their rating (vote_average property)
            .filter(movie => movie.vote_average >= state.filters.rating)

            // The movies should be ordered by popularity (most popular first - popularity property)
            .sort((a, b) => b.popularity - a.popularity);
        })
      );
  }

  getImageUrl(path: string) {
    return this._initService.config.base_url + this._initService.config.poster_sizes[1] + path;
  }

}
