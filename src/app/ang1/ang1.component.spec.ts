import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang1Component } from './ang1.component';

describe('Ang1Component', () => {
  let component: Ang1Component;
  let fixture: ComponentFixture<Ang1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ang1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
