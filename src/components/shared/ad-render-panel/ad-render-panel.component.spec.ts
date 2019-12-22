import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRenderPanelComponent } from './ad-render-panel.component';

describe('AdRenderPanelComponent', () => {
  let component: AdRenderPanelComponent;
  let fixture: ComponentFixture<AdRenderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdRenderPanelComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRenderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
