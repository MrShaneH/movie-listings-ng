import {Genre} from "./genre.model";

export class Movie {
  public poster_path: string | null;
  public adult: boolean;
  public overview: string;
  public release_date: string;
  public genre_ids: number[];
  public genres?: Genre[];
  public id: number;
  public original_title: string;
  public original_language: string;
  public title: string;
  public backdrop_path: string | null;
  public popularity: number;
  public vote_count: number;
  public video: boolean;
  public vote_average: number;
}
