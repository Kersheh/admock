import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { AppMaterialModule } from 'src/app/app-material.module';
import { AdRenderPanelComponent } from 'src/components/shared/ad-render-panel/ad-render-panel.component';

import { TiktokComponent } from './tiktok.component';

describe('TiktokComponent', () => {
  let component: TiktokComponent;
  let fixture: ComponentFixture<TiktokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule
      ],
      declarations: [
        TiktokComponent,
        MockComponent(AdRenderPanelComponent)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiktokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
