import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, forkJoin} from "rxjs";
import {ConfigurationResponse, NowPlayingResponse, Movie, Genre} from "../models";
import {map} from "rxjs/operators";

@Injectable()
export class TheMovieDbService {

  private _apiKey = '6be5b489a37a44d2d78a8cd9239a3c62'; // API Key (v3 auth)
  private _apiReadAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU1YjQ4OWEzN2E0NGQyZDc4YThjZDkyMzlhM2M2MiIsInN1YiI6IjViNmMyNzY5OTI1MTQxNDA0ZjEwNjZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.98VY5efZBKlI5Z_T0AAb67cKLR4Hn6HYPjm9N0HC1B0';
  private _baseUrl = 'https://api.themoviedb.org/3';

  constructor(private _http: HttpClient) {}

  public getConfiguration(): Observable<ConfigurationResponse> {
    const params = new HttpParams()
      .set('api_key', this._apiKey);
    return this._http.get<ConfigurationResponse>(this._baseUrl + '/configuration', { params })
  }

  public getCombined():Observable<{movies: Movie[], genres: Genre[]}> {
    return forkJoin(this.getNowPlaying(), this.getGenres())
      .pipe(
        map((data) => { return {movies: data[0], genres: data[1]}} )
      )
  }

  public getNowPlaying():Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('language', 'en-GB')
      .set('region', "GB");
    return this._http.get<NowPlayingResponse>(this._baseUrl + '/movie/now_playing', { params })
      .pipe( map( response => response.results) )
  }

  public getGenres():Observable<Genre[]> {
    const params = new HttpParams()
      .set('api_key', this._apiKey);
    return this._http.get<any>(this._baseUrl + '/genre/movie/list', { params })
      .pipe( map( response => response.genres) );
  }
}
