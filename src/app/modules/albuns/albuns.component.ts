import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbunsModel } from 'src/app/core/models/albuns/albuns-model';
import { AlbunsService } from 'src/app/core/services/albuns/albuns.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {
  idUser: number;
  results: AlbunsModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private albunsService: AlbunsService
  ) { }

  ngOnInit() {
    this.getAlbuns();
  }

  getAlbuns() {
    this.idUser = this.activatedRoute.snapshot.params.id;

    this.albunsService.getAlbuns(this.idUser).subscribe((resp: AlbunsModel) => {
      this.results = resp;
    });
  }

}
