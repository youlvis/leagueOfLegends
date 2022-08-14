import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChampionsComponent } from './modal-champions.component';

describe('ModalChampionsComponent', () => {
  let component: ModalChampionsComponent;
  let fixture: ComponentFixture<ModalChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
