import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySuiteDetailComponent } from './my-suite-detail/my-suite-detail.component';


@NgModule({
  declarations: [MySuiteDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [MySuiteDetailComponent]
})
export class MySuitesModule { }
