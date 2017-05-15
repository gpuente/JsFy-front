export class User{

    id:string;
    name:string;
    surname:string;
    email:string;
    password:string;
    role:string;
    image:string;

    constructor()
    constructor(role:string)
    constructor(id:string, name:string, surname:string, email:string, password:string, role:string, image:string)
    constructor(id?:string, name?:string, surname?:string, email?:string, password?:string, role?:string, image?:string){
        if(id) this.id = id;
        if(name) this.name = name;
        if(surname) this.surname = surname;
        if(email) this.email = email;
        if(password) this.password = password;
        if(role) this.role = role;
        if(image) this.image = image;
    }
}