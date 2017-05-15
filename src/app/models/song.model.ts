export class Song{

    id:string;
    number:number;
    name:string;
    duration:string;
    file:string;
    album:string;

    constructor();
    constructor(id?:string, number?:number, name?:string, duration?:string, file?:string, album?:string){
        if(id) this.id = id;
        if(number) this.number = number;
        if(name) this.name = name;
        if(duration) this.duration = duration;
        if(file) this.file = file;
        if(album) this.album = album;
    }
}