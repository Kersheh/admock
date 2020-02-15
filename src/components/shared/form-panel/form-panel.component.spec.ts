import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';

import { AppMaterialModule } from 'src/app/app-material.module';
import { FacebookComponent } from 'src/components/views/facebook/facebook.component';
import { AdRenderPanelComponent } from 'src/components/shared/ad-render-panel/ad-render-panel.component';
import formPanelServiceStub from 'src/test/stubs/form-panel.service.stub';

import { FormPanelComponent } from './form-panel.component';

describe('FormPanelComponent', () => {
  let component: FormPanelComponent;
  let fixture: ComponentFixture<FormPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppMaterialModule
      ],
      declarations: [
        FormPanelComponent,
        MockComponent(FacebookComponent),
        MockComponent(AdRenderPanelComponent)
      ],
      providers: [
        formPanelServiceStub.provider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
