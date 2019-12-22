import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';

import { AppMaterialModule } from 'src/app/app-material.module';
import { AppTranslateModule } from 'src/app/app-translate.module';
import { SocialMediaIconComponent } from 'src/components/shared/social-media-icon/social-media-icon.component';
import localStorageServiceStub from 'src/test/stubs/local-storage.service.stub';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        AppTranslateModule,
        RouterTestingModule
      ],
      declarations: [
        SidebarComponent,
        MockComponent(SocialMediaIconComponent)
      ],
      providers: [
        localStorageServiceStub.provider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    localStorageServiceStub.test.setMethodReturn('getUserLocalStorage', {
      isCollapsed: false,
      category: 'facebook'
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.state).toEqual({
      isCollapsed: false,
      category: 'facebook'
    });
  });

  it('should toggle collapse and store new collapsed state', () => {
    expect(component.state.isCollapsed).toEqual(false);

    component.toggleCollapse();
    expect(component.state.isCollapsed).toEqual(true);
    expect(component.localStorageService.setUserLocalStorage).toHaveBeenCalledWith(component.STORE_NAME, component.state);

    component.toggleCollapse();
    expect(component.state.isCollapsed).toEqual(false);
    expect(component.localStorageService.setUserLocalStorage).toHaveBeenCalledWith(component.STORE_NAME, component.state);
  });

  // it('should update active media type and current view', () => {
  //   component.setMediaType('twitter');
  //   expect(component.state.category).toEqual('twitter');
  //   expect(component.localStorageService.setUserLocalStorage).toHaveBeenCalledWith(component.STORE_NAME, component.state);
  //   expect(component.viewService.changeView).toHaveBeenCalledWith('twitter');
  // });
});
