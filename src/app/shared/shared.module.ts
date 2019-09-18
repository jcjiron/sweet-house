import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { ThemeModule } from '../theme/theme.module';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    CarouselComponent, 
    CardComponent,
    FooterComponent,
    PaymentComponent,
    NgDropFilesDirective
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  providers:[
  ],
  exports: [
    CarouselComponent, 
    CardComponent,
    FooterComponent,
    PaymentComponent,
    NgDropFilesDirective
  ]
})
export class SharedModule { }
