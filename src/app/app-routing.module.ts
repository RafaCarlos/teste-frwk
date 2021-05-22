import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'usuario/:id', loadChildren: () => import('./modules/home/usuario/usuario.module').then(m => m.UsuarioModule)},
  {path: 'posts/:id', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  {path: 'post/:id', loadChildren: () => import('./modules/posts/detalhe/detalhe.module').then(m => m.DetalheModule)},
  {path: 'albuns/:id', loadChildren: () => import('./modules/albuns/albuns.module').then(m => m.AlbunsModule)},
  {path: 'albuns/photos/:id', loadChildren: () => import('./modules/albuns/photos/photos.module').then(m => m.PhotosModule)},
  {path: 'todos/:id', loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
