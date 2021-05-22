import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsModel } from 'src/app/core/models/posts/posts-model';
import { PostsService } from 'src/app/core/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  idUser: number;
  results: PostsModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.idUser = this.activatedRoute.snapshot.params.id;

    this.postsService.getPosts(this.idUser).subscribe((resp: PostsModel) => {
      this.results = resp;
    });
  }

}
