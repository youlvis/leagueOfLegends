import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlertComponent } from '../modal-alert/modal-alert.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  openDialog() {
    this.dialog.open(ModalAlertComponent);
  }

  ngOnInit(): void {
  }

}
