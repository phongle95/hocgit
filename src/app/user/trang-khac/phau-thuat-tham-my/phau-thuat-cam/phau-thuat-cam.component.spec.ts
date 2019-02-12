import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhauThuatCamComponent } from './phau-thuat-cam.component';

describe('PhauThuatCamComponent', () => {
  let component: PhauThuatCamComponent;
  let fixture: ComponentFixture<PhauThuatCamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhauThuatCamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhauThuatCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
