import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { NgxFileDropComponent } from 'ngx-file-drop';

import { UploadFileComponent } from './upload-file.component';
import loggerServiceStub from 'src/test/stubs/logger.service.stub';

describe('UploadFileComponent', () => {
  let component: UploadFileComponent;
  let fixture: ComponentFixture<UploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadFileComponent,
        MockComponent(NgxFileDropComponent)
      ],
      providers: [
        loggerServiceStub.provider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
