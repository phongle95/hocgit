import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhamComponent } from './my-pham.component';

describe('MyPhamComponent', () => {
  let component: MyPhamComponent;
  let fixture: ComponentFixture<MyPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
