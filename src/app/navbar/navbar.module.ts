import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
