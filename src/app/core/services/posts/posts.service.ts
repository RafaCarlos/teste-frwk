import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPost(id) {
    return this.httpClient.get(
      `${environment.serverUrl}/posts/${id}`
    );
  }

  getPosts(id) {
    return this.httpClient.get(
      `${environment.serverUrl}/users/${id}/posts`
    );
  }

  getComments(id) {
    return this.httpClient.get(
      `${environment.serverUrl}/posts/${id}/comments`
    );
  }
}
