import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopsRoutingModule } from './oops-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    OopsRoutingModule
  ]
})
export class OopsModule { }
