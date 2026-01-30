import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-responde.type';
import { __values } from 'tslib';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  
  login(name: string, password: string) {
    return this.httpClient.post<LoginResponse>("/login", { name, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("Auth-Token", value.token)
        sessionStorage.setItem("Username", value.name)
      })
    );
  }
}
