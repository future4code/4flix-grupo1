import {SearchMoviesGateway, SearchSeriesGateway} from "../gateways/SearchMoviesSeriesGateway";
import {Movie} from "../entities/Movie";
import {Series} from "../entities/Series";


export class SearchMoviesSeriesUseCase {
constructor(
    private searchMoviesGateway: SearchMoviesGateway,
    private searchSeriesGateway: SearchSeriesGateway
) {
  this.searchMoviesGateway = searchMoviesGateway;
  this.searchSeriesGateway = searchSeriesGateway;
}
  async execute(input: SearchMoviesSeriesUseCaseInput) {
    const movies = await this.searchMoviesGateway.searchMovie(input.query, input.filter.minLength, input.filter.maxLength);
    const movieAsResult = movies.map((movie: Movie) => {
      return {
        title: movie.getTitle(),
        synopsis: movie.getSynopsis(),
        picture: movie.getPicture(),
        type: "movie"
      }
    });
    const series = await this.searchSeriesGateway.searchSeries(input.query, input.filter.minLength, input.filter.maxLength);
    const seriesAsResult = series.map((eachSeries: Series) => {
      return {
       title: eachSeries.getTitle(),
       synopsis: eachSeries.getSynopsis(),
       picture: eachSeries.getPicture(),
       type: "series"
    }
  });
    return [...movieAsResult, ...seriesAsResult]
  }
}

interface SearchMoviesSeriesUseCaseInput {
  query: string
  filter: {
    minLength: number,
    maxLength: number
  }
}

