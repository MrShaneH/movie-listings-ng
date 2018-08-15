import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Genre} from "../../../models";
import {StateService} from "../../../+state";

@Component({
  selector: 'app-genres',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public state$ = this._stateService.getState();

  constructor(private _stateService: StateService) { }

  ngOnInit() { }

  get genres$(): Observable<Genre[]> {
    return this.state$.pipe(
      map((state) => state.genres)
    );
  }

  onGenreChange(event) {
    this._stateService.filterGenres(+event.target.value, event.target.checked);
  }

}
