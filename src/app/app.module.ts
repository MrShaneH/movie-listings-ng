import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {StateService} from './+state';
import {InitializerService, get_settings} from './app.initializer';
import {TheMovieDbService} from './services/themoviedb.service';
import {MoviesComponent} from './components/movies/movies.component';
import {FiltersComponent} from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [
    StateService,
    TheMovieDbService,
    InitializerService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [InitializerService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
