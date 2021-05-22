import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAlbuns(id) {
    return this.httpClient.get(
      `${environment.serverUrl}/users/${id}/albums`
    );
  }

  getPhotos(id) {
    return this.httpClient.get(
      `${environment.serverUrl}/albums/${id}/photos`
    );
  }
}
