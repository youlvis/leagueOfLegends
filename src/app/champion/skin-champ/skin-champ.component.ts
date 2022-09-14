import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalChampComponent } from '../modal-champ/modal-champ.component';



@Component({
  selector: 'app-skin-champ',
  templateUrl: './skin-champ.component.html',
  styleUrls: ['./skin-champ.component.css']
})
export class SkinChampComponent implements OnInit {
  slideIndex: number = 0;
  public fruits: Array<any> = [];
  public id: any;

  @Input()
  champion: any;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.showSlides(this.champion.length + 1);
  }


  showSlides(n: number): void {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  skinAcquired() {
    return false;
  }

  modalCompra(champ: any, index: number) {

    if (index != 0) {
      var dataFrase: string = "¡Elige un nuevo estilo para tu campeón!";
    } else {
      dataFrase = "¡Compra tu campeón!"
    }
    this.openModal(champ, dataFrase)
  }

  openModal(data: any, dataFrase: string) {
    this.dialog.open(ModalChampComponent, {
      disableClose: true,
      width: '600px',
      height: '600px',
      panelClass: 'custom-dialog-container',
      data: {
        data,
        dataFrase
      }
    });
  }


}


