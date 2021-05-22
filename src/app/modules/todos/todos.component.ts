import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosModel } from 'src/app/core/models/todos/todos-model';
import { TodosService } from 'src/app/core/services/todos/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  idUser: number;
  results: TodosModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.idUser = this.activatedRoute.snapshot.params.id;

    this.todosService.getTodos(this.idUser).subscribe((resp: TodosModel) => {
      this.results = resp;
    });
  }

}
