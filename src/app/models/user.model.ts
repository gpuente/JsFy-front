export class User{

    id:string;
    name:string;
    surname:string;
    email:string;
    password:string;
    role:string;
    image:string;

    constructor(id:string, name:string, surname:string, email:string, password:string, role:string, image:string){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
    }
}