import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrietLongComponent } from './triet-long.component';

describe('TrietLongComponent', () => {
  let component: TrietLongComponent;
  let fixture: ComponentFixture<TrietLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrietLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrietLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
