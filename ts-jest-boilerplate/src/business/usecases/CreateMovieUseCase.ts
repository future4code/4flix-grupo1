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
    async execute(input: CreateMovieUseCaseInput): Promise<string> {
        if (!input.title ||
            !input.date ||
            !input.length ||
            !input.synopsis ||
            !input.link ||
            !input.picture
        ) {
            throw new MissingInformationError("Faltam informações para a criação do filme!")
        }

        const movie = new Movie(input.title, input.date, input.length, input.synopsis, input.link, input.picture)

        await this.movieGateway.createMovie(movie)
        return "Filme criado com sucesso!"
    }
}

interface CreateMovieUseCaseInput {
    title: string
    date: string
    length: string
    synopsis: string
    link: string
    picture: string
}
