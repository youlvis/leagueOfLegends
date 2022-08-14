import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from './store/store.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './navbar/button/button.component';
import { NavbarModule } from './navbar/navbar.module';
import { ModalChampionsComponent } from './store/modal-champions/modal-champions.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule,
    NavbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
