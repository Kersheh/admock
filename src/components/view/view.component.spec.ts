import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import localStorageServiceStub from 'src/test/stubs/local-storage.service.stub';
import viewServiceStub from 'src/test/stubs/view.service.stub';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewComponent
      ],
      providers: [
        localStorageServiceStub.provider,
        viewServiceStub.provider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    localStorageServiceStub.test.setMethodReturn('getUserLocalStorage', {
      activeView: 'facebook'
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.state.activeView).toEqual('facebook');
  });

  it('should change current view and store new active value', () => {
    viewServiceStub.test.setObservableReturn('view', 'instagram');
    expect(component.state.activeView).toEqual('instagram');
    expect(component.localStorageService.setUserLocalStorage).toHaveBeenCalledWith(component.STORE_NAME, component.state);
  });
});
