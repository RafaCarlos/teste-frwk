import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosModel } from 'src/app/core/models/albuns/photos-model';
import { AlbunsService } from 'src/app/core/services/albuns/albuns.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  idAlbum: number;
  results: PhotosModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private albunsService: AlbunsService
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.idAlbum = this.activatedRoute.snapshot.params.id;

    this.albunsService.getPhotos(this.idAlbum).subscribe((resp: PhotosModel) => {
      this.results = resp;
    });
  }

}
