import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component, Injectable} from '@angular/core';
import {StateService} from './+state';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockMoviesComponent,
        MockFiltersComponent
      ],
      providers: [ {provide: StateService, useClass: MockStateService} ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'NotFlix'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NotFlix');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('NotFlix');
  }));
});


@Component({
  selector: 'app-filters',
  template: ''
})
class MockFiltersComponent {
}

@Component({
  selector: 'app-movies',
  template: ''
})
class MockMoviesComponent {
}

@Injectable()
export class MockStateService {
  public loadAll(): void {}
}
