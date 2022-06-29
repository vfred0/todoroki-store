import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BarSearchComponent } from './components/bar-search/bar-search.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, CardComponent, TagComponent, BarSearchComponent],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  exports: [HeaderComponent, ButtonComponent, CardComponent, TagComponent, BarSearchComponent],
})
export class SharedModule {}
