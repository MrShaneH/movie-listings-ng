import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StateService} from '../../+state';
import {InitializerService} from '../../app.initializer';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [
        {provide: StateService, useClass: MockStateService},
        {provide: InitializerService, useClass: MockInitializerService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Injectable()
export class MockStateService {
  public getState() {
    return Observable.create();
  }
}

@Injectable()
export class MockInitializerService {}
