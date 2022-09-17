import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/service/user.service';
import { SkinChampComponent } from "../skin-champ/skin-champ.component";

@Component({
  selector: 'app-modal-champ',
  templateUrl: './modal-champ.component.html',
  styleUrls: ['./modal-champ.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalChampComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog, public userService: UserService, private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {
    //this.userService.getUserInfo()
    console.log(this.data.data.fields)
  }

  closeModal() {
    this.dialog.closeAll();
  }

  buyChamp() {
    const nameSkin = this.data.data.fields.title.toLowerCase()
    const price = parseInt(this.data.data.fields.description)
    const nameChamp = this.data.nameChamp
    this.userService.shopSkins(nameChamp, nameSkin, price).subscribe(res=> {
      console.log
    })
    this.dialog.closeAll()
  }


}
