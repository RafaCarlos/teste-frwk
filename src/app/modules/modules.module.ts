import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsModule } from './albuns/albuns.module';
import { PhotosModule } from './albuns/photos/photos.module';
import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';
import { HomeModule } from './home/home.module';
import { UsuarioModule } from './home/usuario/usuario.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbunsModule,
    PhotosModule,
    PostsModule,
    TodosModule,
    HomeModule,
    UsuarioModule
  ]
})
export class ModulesModule { }
