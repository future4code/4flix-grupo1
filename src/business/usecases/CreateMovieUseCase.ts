import { Movie } from "../entities/Movie"
import { MovieGateway } from "../gateways/MovieGateway"
import { MissingInformationError } from "../entities/errors/MissingInformationError"

export class CreateMovieUseCase {
    private movieGateway: MovieGateway
    constructor(
        movieGateway: MovieGateway
    ) {
        this.movieGateway = movieGateway
    }
    async execute(input: CreateMovieUseCaseInput) {
        if (!input.title ||
            !input.date ||
            !input.length ||
            !input.synopsis ||
            !input.link ||
            !input.picture
        ) {
            throw new MissingInformationError("Faltam informações para a criação do filme!")
        }

        const movie = new Movie(
            input.title,
            input.date,
            input.length,
            input.synopsis,
            input.link,
            input.picture
        );

        await this.movieGateway.createMovie(movie)
    }
}

interface CreateMovieUseCaseInput {
    title: string
    date: string
    length: number
    synopsis: string
    link: string
    picture: string
}
