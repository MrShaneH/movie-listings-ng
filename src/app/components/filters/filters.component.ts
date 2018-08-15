import { Component, OnInit } from '@angular/core';
import {MatSliderChange} from '@angular/material';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Genre} from '../../models';
import {StateService} from '../../+state';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public state$ = this._stateService.getState();
  public ratingConfig: any;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.ratingConfig = {
      min: 0,
      max: 10,
      step: 0.5,
      tickInterval: 'auto',
      thumbLabel: true
    };
  }

  get rating$(): Observable<number> {
    return this.state$.pipe(
      map( state => state.filters.rating )
    );
  }

  get genres$(): Observable<Genre[]> {
    return this.state$.pipe(
      map((state) => state.genres)
    );
  }

  onRatingChange(event: MatSliderChange) {
    this._stateService.filterRating(event.value);
  }

  onGenreChange(event) {
    this._stateService.filterGenres(+event.target.value, event.target.checked);
  }

}
