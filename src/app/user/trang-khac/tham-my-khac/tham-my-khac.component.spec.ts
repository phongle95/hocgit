import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThamMyKhacComponent } from './tham-my-khac.component';

describe('ThamMyKhacComponent', () => {
  let component: ThamMyKhacComponent;
  let fixture: ComponentFixture<ThamMyKhacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThamMyKhacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThamMyKhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
