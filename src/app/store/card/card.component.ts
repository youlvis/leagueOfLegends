import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
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
  posts$! : Observable<Entry<any>[]>; 

  constructor(public dialog: MatDialog, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.posts$ = this.contentfulService.getPosts();
  }

  openModal(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalChampionsComponent, {
      width: '700px',
      height:'500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}



