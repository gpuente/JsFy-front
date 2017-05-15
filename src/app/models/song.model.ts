export class Song{

    id:string;
    number:number;
    name:string;
    duration:string;
    file:string;
    album:string;

    constructor(id:string, number:number, name:string, duration:string, file:string, album:string){
        this.id = id;
        this.number = number;
        this.name = name;
        this.duration = duration;
        this.file = file;
        this.album = album;
    }
}