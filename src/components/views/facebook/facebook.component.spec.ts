import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { AppMaterialModule } from 'src/app/app-material.module';
import { AppTranslateModule } from 'src/app/app-translate.module';
import { AdRenderPanelComponent } from 'src/components/shared/ad-render-panel/ad-render-panel.component';
import { UploadFileComponent } from 'src/components/shared/upload-file/upload-file.component';

import { FacebookComponent } from './facebook.component';

describe('FacebookComponent', () => {
  let component: FacebookComponent;
  let fixture: ComponentFixture<FacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        AppTranslateModule
      ],
      declarations: [
        FacebookComponent,
        MockComponent(AdRenderPanelComponent),
        MockComponent(UploadFileComponent)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
