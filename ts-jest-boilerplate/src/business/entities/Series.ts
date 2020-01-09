import { Episode } from "../entities/Episode"

export class Series {
    private title: string
    private date: string
    private length: string
    private synopsis: string
    private link: string
    private picture: string
    private episodes: Episode[]

    constructor(
        title:string,
        date: string,
        length: string,
        synopsis: string,
        link: string,
        picture: string,
        episodes: Episode[]
    ) {}
}
