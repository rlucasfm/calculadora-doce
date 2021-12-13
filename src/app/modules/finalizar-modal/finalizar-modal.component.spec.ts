import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarModalComponent } from './finalizar-modal.component';

describe('FinalizarModalComponent', () => {
  let component: FinalizarModalComponent;
  let fixture: ComponentFixture<FinalizarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
