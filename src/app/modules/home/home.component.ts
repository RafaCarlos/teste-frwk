import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/core/models/users/users-model';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: UsersModel;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((resp: UsersModel) => {
      this.results = resp;
    });
  }

}
