import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilityComponent } from './hability/hability.component';
import { CoverChampComponent } from './cover-champ/cover-champ.component';
import { SkinChampComponent } from './skin-champ/skin-champ.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HabilityComponent,
    CoverChampComponent,
    SkinChampComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CoverChampComponent
  ]
})
export class ChampionModule { }
