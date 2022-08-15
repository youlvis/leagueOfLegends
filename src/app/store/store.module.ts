import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

import { CampeonesComponent } from './campeones/campeones.component';
import { CardComponent } from './card/card.component';
import { ModalChampionsComponent } from './modal-champions/modal-champions.component';



@NgModule({
  declarations: [CampeonesComponent,
    CardComponent,
    ModalChampionsComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    
  ],
  exports: [
    CardComponent,
    ModalChampionsComponent,
  ]
})
export class StoreModule { }
