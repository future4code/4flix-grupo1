import { Series } from './../entities/Series';

export interface SeriesGateway {
    createSeries(series: Series): any
}
