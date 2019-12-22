import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppMaterialModule } from 'src/app/app-material.module';
import { AppTranslateModule } from 'src/app/app-translate.module';
import userServiceStub from 'src/test/stubs/user.service.stub';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        AppTranslateModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        ProfileComponent
      ],
      providers: [
        userServiceStub.provider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    userServiceStub.test.setTestUser();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
