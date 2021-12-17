import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelasComponent } from './freelas.component';

describe('FreelasComponent', () => {
  let component: FreelasComponent;
  let fixture: ComponentFixture<FreelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
