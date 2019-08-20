import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { ThemeModule } from '../theme/theme.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    CarouselComponent, 
    CardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    CarouselComponent, 
    CardComponent,
    FooterComponent
  ]
})
export class SharedModule { }
