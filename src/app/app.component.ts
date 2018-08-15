import {Component, OnInit} from '@angular/core';
import {StateService} from './+state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'NotFlix';

  constructor(private _stateService: StateService) {}

  public ngOnInit() {
    // Requirement: The input API's should only be called once
    this._stateService.loadAll();
  }
}
