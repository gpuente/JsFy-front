export class Album{

    id:string;
    title:string;
    description:string;
    year:string;
    image:string;
    artist:string;

    constructor(id: string, title:string, description:string, year:string, image:string, artist:string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.year = year;
        this.image = image;
        this.artist = artist;
    }
}