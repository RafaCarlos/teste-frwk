import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsCommentsModel } from 'src/app/core/models/posts/posts-comments-model';
import { PostsModel } from 'src/app/core/models/posts/posts-model';
import { PostsService } from 'src/app/core/services/posts/posts.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {
  idPost: number;
  resultPost: PostsModel;
  results: PostsCommentsModel;

  commentForm: FormGroup;
  newComment: PostsCommentsModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.idPost = this.activatedRoute.snapshot.params.id;

    this.getPost();
    this.getComments();
  }

  initializeForm() {
    this.commentForm = this.fb.group({
      'nome': ['', Validators.required],
      'email': ['', Validators.required],
      'comentario': ['', Validators.required]
    });
  }

  getPost() {
    this.postsService.getPost(this.idPost).subscribe((resp: PostsModel) => {
      this.resultPost = resp;
    });
  }

  getComments() {
    this.postsService.getComments(this.idPost).subscribe((resp: PostsCommentsModel) => {
      this.results = resp;
    });
  }

  save() {
    if (this.commentForm.valid) {
      this.newComment = new PostsCommentsModel();

      this.newComment.name = this.commentForm.value.nome;
      this.newComment.email = this.commentForm.value.email;
      this.newComment.body = this.commentForm.value.comentario;
    }
  }

}
