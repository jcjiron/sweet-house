import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    CarouselComponent, 
    CardComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    CarouselComponent, 
    CardComponent
  ]
})
export class SharedModule { }
