import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuTriDaSpaComponent } from './dieu-tri-da-spa.component';

describe('DieuTriDaSpaComponent', () => {
  let component: DieuTriDaSpaComponent;
  let fixture: ComponentFixture<DieuTriDaSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuTriDaSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieuTriDaSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
