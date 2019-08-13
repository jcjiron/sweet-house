import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    RouterModule
  ]
})
export class CoreModule { }
