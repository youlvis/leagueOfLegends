import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-champions',
  templateUrl: './modal-champions.component.html',
  styleUrls: ['./modal-champions.component.css']
})
export class ModalChampionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialog.closeAll();
  }

}
