import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {TheMovieDbService} from "../services/themoviedb.service";
import {HttpClientModule} from "@angular/common/http";
import {StateService} from "../+state";
import {InitializerService, get_settings} from "./app.initializer";
import { MoviesComponent } from './components/movies/movies.component';
import { FiltersComponent } from './components/filters/filters.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
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
