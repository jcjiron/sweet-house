import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    SharedModule
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ThemeModule

  ]
})
export class FeaturesModule { }
