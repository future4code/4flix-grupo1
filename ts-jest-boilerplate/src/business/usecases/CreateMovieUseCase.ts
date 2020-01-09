import {Movie} from "../entities/Movie"

export class CreateMovieUseCase {
    execute(input: CreateMovieUseCaseInput): CreateMovieUseCaseOutput {
        const movie = new Movie (input.title, input.date, input.length, input.synopsis, input.link, input.picture)
        return 
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

interface CreateMovieUseCaseOutput {
    message: string
}