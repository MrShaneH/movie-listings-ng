import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import {MatSliderModule} from '@angular/material/slider';
import {Injectable} from '@angular/core';
import {StateService} from '../../+state';
import {Observable} from 'rxjs';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSliderModule],
      declarations: [ FiltersComponent ],
      providers: [ {provide: StateService, useClass: MockStateService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
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
