import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbunsRoutingModule } from './albuns-routing.module';
import { AlbunsComponent } from './albuns.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    MaterialModule
  ]
})
export class AlbunsModule { }
