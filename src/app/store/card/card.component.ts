import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentfulService } from "../../../service/contentful.service";
import { Entry } from 'contentful';
import { Observable } from 'rxjs';
import { ModalChampionsComponent } from '../modal-champions/modal-champions.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public dialog: MatDialog, private contentfulService: ContentfulService) { }

  public lolChampions: Entry<any>[] = [];

  ngOnInit(): void {
    this.contentfulService.getChampions()
      .then(lolChampions => this.lolChampions = lolChampions)
  }

  openModal(enterAnimationDuration: string, exitAnimationDuration: string, champ: Entry<any>): void {
    this.dialog.open(ModalChampionsComponent, {
      width: '700px',
      height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        champ
      }
    });
  }
}



