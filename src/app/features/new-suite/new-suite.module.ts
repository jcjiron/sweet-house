import { SharedModule } from './../../shared/shared.module';
import { NewSuiteComponent } from './new-suite.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { AddressComponent } from './components/address/address.component';
import { DetailsComponent } from './components/details/details.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LocationComponent } from './components/location/location.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { NewSuiteRoutingModule } from './new-suite.routing';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    declarations: [
        NewSuiteComponent,
        AddressComponent,
        DetailsComponent,
        PhotosComponent,
        LocationComponent,
        MainInfoComponent
    ],
    imports: [
        ThemeModule,
        CoreModule,
        CommonModule,
        NewSuiteRoutingModule,
        AgmCoreModule,
        SharedModule
    ],
    exports: [
        NewSuiteComponent
    ],
    providers: [],
})
export class NewSuiteModule {}