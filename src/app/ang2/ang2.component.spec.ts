import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang2Component } from './ang2.component';

describe('Ang2Component', () => {
  let component: Ang2Component;
  let fixture: ComponentFixture<Ang2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ang2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
