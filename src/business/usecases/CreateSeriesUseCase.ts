import { Episode } from './../entities/Episode';
import { Series } from './../entities/Series';
import { SeriesGateway } from "../gateways/SeriesGateway"
import { MissingInformationError } from "../entities/errors/MissingInformationError"

export class CreateSeriesUseCase {
    private seriesGateway: SeriesGateway
    constructor(
        seriesGateway: SeriesGateway
    ) {
        this.seriesGateway = seriesGateway
    }
    async execute(input: CreateSeriesUseCaseInput) {
        if (!input.title ||
            !input.date ||
            !input.length ||
            !input.synopsis ||
            !input.link ||
            !input.picture 
        ) {
            throw new MissingInformationError("Faltam informações para a criação da serie!")
        }

        input.episodes.forEach(episode => {
            if (!episode.getTitle() ||
                !episode.getLength() ||
                !episode.getLink() ||
                !episode.getPicture() ||
                !episode.getSynopsis()
            ) {
                throw new MissingInformationError("Faltam informações para a criação da serie!")
            }
        });

        const series = new Series(input.title,
            input.date,
            input.length,
            input.synopsis,
            input.link,
            input.picture,
            input.episodes
        );

        await this.seriesGateway.createSeries(series)
    }
}

interface CreateSeriesUseCaseInput {
    title: string
    date: string
    length: number
    synopsis: string
    link: string
    picture: string
    episodes: Episode[]
}
