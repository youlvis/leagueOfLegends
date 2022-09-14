import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-champ',
  templateUrl: './modal-champ.component.html',
  styleUrls: ['./modal-champ.component.css']
})
export class ModalChampComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  closeModal(){
    this.dialog.closeAll();
  }


 
}
