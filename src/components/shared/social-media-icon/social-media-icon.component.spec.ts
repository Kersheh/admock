import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SocialMediaIconComponent } from './social-media-icon.component';

describe('SocialMediaIconComponent', () => {
  let component: SocialMediaIconComponent;
  let fixture: ComponentFixture<SocialMediaIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        SocialMediaIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
