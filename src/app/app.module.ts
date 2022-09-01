import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from './store/store.module';
import { NavbarModule } from './navbar/navbar.module';

import { ContentfulService } from "../service/contentful.service";
import { ChampionModule } from './champion/champion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    StoreModule,
    NavbarModule,
    ChampionModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
