import {Movie} from "../entities/Movie"

export interface MovieGateway {
    createMovie(movie: Movie): Promise<string>
}

