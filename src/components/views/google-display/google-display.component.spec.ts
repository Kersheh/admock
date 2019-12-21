import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDisplayComponent } from './google-display.component';

describe('GoogleDisplayComponent', () => {
  let component: GoogleDisplayComponent;
  let fixture: ComponentFixture<GoogleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
