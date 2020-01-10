import {Movie} from "../entities/Movie";
import {Series} from "../entities/Series";

export interface SearchMoviesGateway {
  searchMovie(query: string, filterMinLength?: number, filterMaxLength?: number): Promise<Movie[]>
}

export interface SearchSeriesGateway {
  searchSeries(query: string, filterMinLength?: number, filterMaxLength?: number):Promise<Series[]>
}