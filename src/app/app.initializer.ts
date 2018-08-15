import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {TheMovieDbService} from "../services/themoviedb.service";
import {ConfigurationResponse, ImagesConfig} from "../models/configurationResponse.model";

export function get_settings(initializerService: InitializerService) {
  return () => initializerService.getSettings();
}

@Injectable()
export class InitializerService {

  private _config: ConfigurationResponse;

  constructor(private _http: HttpClient, private _movieService: TheMovieDbService) { }

  public getSettings(): Promise<any> {

    return this._movieService.getConfiguration()
      .toPromise()
      .then(settings => {
        this._config = settings;
        return settings;
      });
  }

  get config(): ImagesConfig {
    return this._config.images;
  }

}
