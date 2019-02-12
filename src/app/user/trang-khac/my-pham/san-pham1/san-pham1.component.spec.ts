import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPham1Component } from './san-pham1.component';

describe('SanPham1Component', () => {
  let component: SanPham1Component;
  let fixture: ComponentFixture<SanPham1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPham1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPham1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
