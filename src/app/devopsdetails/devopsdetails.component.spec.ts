import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsdetailsComponent } from './devopsdetails.component';

describe('DevopsdetailsComponent', () => {
  let component: DevopsdetailsComponent;
  let fixture: ComponentFixture<DevopsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevopsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
