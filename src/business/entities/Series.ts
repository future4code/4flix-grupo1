import { Episode } from "./Episode"

export class Series {
    constructor(
        private title: string,
        private date: string,
        private length: number,
        private synopsis: string,
        private link: string,
        private picture: string,
        private episodes: Episode[],
    ) {}


    public getTitle() {
        return this.title;
    }

    public getLength() {
        return this.length;
    }

    public getLink() {
        return this.link;
    }

    public getPicture() {
        return this.picture;
    }

    public getSynopsis() {
        return this.synopsis;
    }
}
