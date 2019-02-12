import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamToDuongVatComponent } from './lam-to-duong-vat.component';

describe('LamToDuongVatComponent', () => {
  let component: LamToDuongVatComponent;
  let fixture: ComponentFixture<LamToDuongVatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamToDuongVatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamToDuongVatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
