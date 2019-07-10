import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzSidenavModule } from 'ngx-materialize'
import { MzNavbarModule } from 'ngx-materialize'
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'
import { MzButtonModule } from 'ngx-materialize'

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MzSidenavModule,
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule
  ],
  exports:[
    BrowserAnimationsModule,
    MzSidenavModule,
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule
  ]
})
export class ThemeModule { }
