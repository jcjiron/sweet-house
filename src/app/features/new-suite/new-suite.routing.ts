import { PhotosComponent } from './components/photos/photos.component';
import { LocationComponent } from './components/location/location.component';
import { DetailsComponent } from './components/details/details.component';
import { AddressComponent } from './components/address/address.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainInfoComponent } from './components/main-info/main-info.component';
import { NewSuiteComponent } from './new-suite.component';

const routes: Routes = [
    { path: 'new-suite', component: NewSuiteComponent, children:[
        { path: '', component: MainInfoComponent },
        { path: 'address', component: AddressComponent },
        { path: 'details', component: DetailsComponent },
        { path: 'location', component: LocationComponent },
        { path: 'photos', component: PhotosComponent }
    ] }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewSuiteRoutingModule {}
