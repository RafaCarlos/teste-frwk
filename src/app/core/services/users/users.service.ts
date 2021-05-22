import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(id?) {
    if (id) {
      return this.httpClient.get(
        `${environment.serverUrl}/users/${id}`
      );
    } else {
      return this.httpClient.get(
        `${environment.serverUrl}/users`
      );
    }
  }
}
