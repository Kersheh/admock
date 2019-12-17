import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';

import { AppTranslateModule } from 'src/app/app-translate.module';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { ViewComponent } from 'src/components/view/view.component';
import { FooterComponent } from 'src/components/footer/footer.component';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;
  let titleService: Title;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppTranslateModule
      ],
      declarations: [
        AppComponent,
        MockComponent(SidebarComponent),
        MockComponent(ViewComponent),
        MockComponent(FooterComponent)
      ]
    }).compileComponents();

    translateService = TestBed.get(TranslateService);
    titleService = TestBed.get(Title);

    spyOn(translateService, 'setTranslation');
    spyOn(translateService, 'setDefaultLang');
    spyOn(titleService, 'setTitle');
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
