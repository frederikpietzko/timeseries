import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    // FIXME Put this stuff into proper types in the API package.
    return this.httpClient
      .post<{ token: string }>('/auth/login', { email, password })
      .pipe(map((res) => res.token));
  }
}
