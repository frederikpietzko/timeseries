import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse } from '@timeseries/authentication-api-interfaces';
import { StringMappingType } from '@ts-morph/common/lib/typescript';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    // TODO do not only pipe this out but also put this token into a cookie or something.
    return this.httpClient
      .post<AuthenticationResponse>('/auth/login', { email, password })
      .pipe(map((res) => res.access_token));
  }

  register(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
  ): Observable<string> {
    // TODO do not only pipe this out but also iput this token into a cookie or something
    return this.httpClient
      .post<AuthenticationResponse>('auth/register', {
        email,
        password,
        firstname,
        lastname,
      })
      .pipe(map((res) => res.access_token));
  }
}
