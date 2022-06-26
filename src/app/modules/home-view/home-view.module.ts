import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewRoutingModule } from './home-view-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    CategoriesComponent
    
  ],
  imports: [
    CommonModule,
    HomeViewRoutingModule,
    SharedModule
  ]
})
export class HomeViewModule { }
