import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../models/register.dto';

@Injectable({
    providedIn: 'root',
})

export class RegisterService {

    constructor(private http: HttpClient) {}

    registerUser(register: RegisterDto): any {
        return this.http.post("http://localhost:4000/user", register);
    }
}