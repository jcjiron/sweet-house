import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
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
