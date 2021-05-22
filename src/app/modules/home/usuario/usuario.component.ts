import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersModel } from 'src/app/core/models/users/users-model';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  idUser: number;
  results: UsersModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.idUser = this.activatedRoute.snapshot.params.id;

    this.usersService.getUsers(this.idUser).subscribe((resp: UsersModel) => {
      this.results = resp;
    });
  }

}
