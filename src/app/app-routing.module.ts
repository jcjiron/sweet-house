import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { NewSuiteComponent } from './features/new-suite/new-suite.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-suite', component: NewSuiteComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
