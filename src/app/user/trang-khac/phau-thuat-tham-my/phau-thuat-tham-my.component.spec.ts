import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhauThuatThamMyComponent } from './phau-thuat-tham-my.component';

describe('PhauThuatThamMyComponent', () => {
  let component: PhauThuatThamMyComponent;
  let fixture: ComponentFixture<PhauThuatThamMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhauThuatThamMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhauThuatThamMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
