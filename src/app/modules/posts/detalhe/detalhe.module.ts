import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalheRoutingModule } from './detalhe-routing.module';
import { DetalheComponent } from './detalhe.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetalheComponent],
  imports: [
    CommonModule,
    DetalheRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DetalheModule { }
