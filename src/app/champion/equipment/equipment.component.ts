import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/service/contentful.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  public spells: Entry<any>[] = [];
  public items: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getSpell()
      .then(spells => this.spells = spells)

    this.contentfulService.getItems()
      .then(items => this.items = items)
  }


}
