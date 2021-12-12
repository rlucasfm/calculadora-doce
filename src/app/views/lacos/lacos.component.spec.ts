import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacosComponent } from './lacos.component';

describe('LacosComponent', () => {
  let component: LacosComponent;
  let fixture: ComponentFixture<LacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
