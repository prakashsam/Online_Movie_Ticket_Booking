export class RegisterDto {
    username: string;
    name: string;
    email: string;
    password: string;

    constructor(username: string, name: string, email: string, password: string) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}