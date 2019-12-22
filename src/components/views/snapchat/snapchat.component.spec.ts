import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { AppMaterialModule } from 'src/app/app-material.module';
import { AdRenderPanelComponent } from 'src/components/shared/ad-render-panel/ad-render-panel.component';

import { SnapchatComponent } from './snapchat.component';

describe('SnapchatComponent', () => {
  let component: SnapchatComponent;
  let fixture: ComponentFixture<SnapchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule
      ],
      declarations: [
        SnapchatComponent,
        MockComponent(AdRenderPanelComponent)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
