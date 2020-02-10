import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';

import { AppTranslateModule } from 'src/app/app-translate.module';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import localStorageServiceStub from 'src/test/stubs/local-storage.service.stub';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;
  let titleService: Title;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppTranslateModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(SidebarComponent),
        MockComponent(FooterComponent)
      ],
      providers: [
        localStorageServiceStub.provider
      ]
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    titleService = TestBed.inject(Title);
    router = TestBed.inject(Router);

    spyOn(translateService, 'setTranslation');
    spyOn(translateService, 'setDefaultLang');
    spyOn(titleService, 'setTitle');
    spyOn(router, 'navigate');
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

    expect(translateService.setTranslation).toHaveBeenCalled();
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('en');
    expect(titleService.setTitle).toHaveBeenCalled();
  });
});
