import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzSidenavModule, MzTextareaModule, MzValidationModule } from 'ngx-materialize'
import { MzNavbarModule } from 'ngx-materialize'
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'
import { MzButtonModule } from 'ngx-materialize'
import { MzCardModule } from 'ngx-materialize'
import { MzInputModule } from 'ngx-materialize'
import { MzSelectModule } from 'ngx-materialize'
import { MzTabModule } from 'ngx-materialize'

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MzSidenavModule,
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule,
    MzCardModule,
    MzInputModule,
    MzTextareaModule,
    MzValidationModule,
    MzSelectModule,
    MzTabModule
  ],
  exports:[
    BrowserAnimationsModule,
    MzSidenavModule,
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule,
    MzCardModule,
    MzInputModule,
    MzTextareaModule,
    MzValidationModule,
    MzSelectModule,
    MzTabModule
  ]
})
export class ThemeModule { }
