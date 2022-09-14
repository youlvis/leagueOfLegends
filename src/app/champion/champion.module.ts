import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilityComponent } from './hability/hability.component';
import { CoverChampComponent } from './cover-champ/cover-champ.component';
import { SkinChampComponent } from './skin-champ/skin-champ.component';
import { RouterModule } from '@angular/router';
import { ModalChampComponent } from './modal-champ/modal-champ.component';
import { EquipmentComponent } from './equipment/equipment.component';




@NgModule({
  declarations: [
    HabilityComponent,
    CoverChampComponent,
    SkinChampComponent,
    ModalChampComponent,
    EquipmentComponent,
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
