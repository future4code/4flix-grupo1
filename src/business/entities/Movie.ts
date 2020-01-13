export class Movie {
    constructor(
        private title: string,
        private date: string,
        private length: number,
        private synopsis: string,
        private link: string,
        private picture: string,
    ) {}

    public getTitle() {
        return this.title
    }

    public getDate() {
        return this.date
    }

    public getSynopsis() {
        return this.synopsis
    }

    public getLink() {
        return this.link
    }

    public getLength() {
        return this.length
    }

    public getPicture() {
        return this.picture
    }
}

// export class SearchMovieResult extends Movie {
//
//         id: string,
//         title: string,
//         synopsis: string,
//         picture: string,
//         type: string
//
//
// }
