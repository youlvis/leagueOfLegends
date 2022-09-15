import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/service/contentful.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { UserService } from "src/service/user.service";


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  @Input()
  champName: any;

  public spells: Entry<any>[] = [];
  public items: Entry<any>[] = [];

  counterSpell: number = 0;
  counterItems: number = 0;

  formSpell: FormGroup;
  formItems: FormGroup;

  dataSpells: any;
  dataItems: any;

  constructor(private contentfulService: ContentfulService,
    private fb: FormBuilder, private userService: UserService,
  ) {

    this.formSpell = this.fb.group({
      checkArray: this.fb.array([])
    })

    this.formItems = this.fb.group({
      checkArray: this.fb.array([])
    })

  }

  ngOnInit(): void {
    this.contentfulService.getSpell()
      .then(spells => this.spells = spells)

    this.contentfulService.getItems()
      .then(items => this.items = items)

    //comprar si el invocador tiene una configuracion de hechizos para el campeon en el que esta ubicado
    this.userService.getSpell().subscribe(res => this.checkedSpell(res, this.champName.toLowerCase()))

  }


  checkedSpell(res: any, champ: string) {

    if (res[champ]) {

      const checkboxSpell01 = document.getElementById(
        `${res[champ].spells[0]}`
      ) as HTMLInputElement | null;

      const checkboxSpell02 = document.getElementById(
        `${res[champ].spells[1]}`
      ) as HTMLInputElement | null;

      checkboxSpell01.checked = true;
      checkboxSpell02.checked = true;
      
      this.counterSpell= 2;
    }

  }
//hacer la misma logica de los spells
  checkedItems() {

  }


  checkedStateSpell(event, maxNumber) {
    if (event.target.checked === true) {
      if (this.counterSpell < maxNumber) {
        this.counterSpell++
      } else {
        event.target.checked = false;
      }
    } else if (this.counterSpell > 0) {
      this.counterSpell--;
    }
  }

  checkedStateItems(event, maxNumber) {
    if (event.target.checked === true) {
      if (this.counterItems < maxNumber) {
        this.counterItems++
      } else {
        event.target.checked = false;
      }
    } else if (this.counterItems > 0) {
      this.counterItems--;
    }
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.formSpell.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxChangeItems(e) {
    const checkArray: FormArray = this.formItems.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitFormSpell() {
    //integrar con la api TODO
    console.log(this.formSpell.value.checkArray);
  }

  submitFormItems() {
    //integrar con la api TODO
    console.log(this.formItems.value.checkArray);
  }

}
