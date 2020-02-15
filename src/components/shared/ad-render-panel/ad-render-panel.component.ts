import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { chain } from 'lodash';

import CONSTANTS from 'src/shared/constants';
import { PreviewPanelService, PreviewPanel } from 'src/shared/services/preview-panel.service';
import { FACEBOOK_CALL_TO_ACTION_OPTS } from 'src/components/views/facebook/facebook.component';

interface PreviewFacebook {
  adType: {
    value: 'image' | 'video' | 'carousel';
  };
  pageName: string;
  postMessage: string;
  ctaButton: string;
  linkUrl: string;
  linkDesc: string;
  linkCaption: string;
  socialReactions: Array<string>;
  socialLikes: number;
  socialComments: number;
  socialShares: number;
  pageLogo: any;
  adImage: any;
}

interface PreviewProps {
  facebook: PreviewFacebook;
}

@Component({
  selector: 'app-ad-render-panel',
  templateUrl: './ad-render-panel.component.html',
  styleUrls: ['./ad-render-panel.component.scss']
})
export class AdRenderPanelComponent implements OnDestroy {
  public viewName: string;
  public previewProps: PreviewProps;
  public previewPanel: PreviewPanel;
  public previewPanel$: Subscription;
  public defaults: {
    [key: string]: {
      [key: string]: string
    };
  };

  public MEDIA_TYPES = CONSTANTS.MEDIA_TYPES;
  public FACEBOOK_CALL_TO_ACTION_BTN_TRANSLATIONS =
    chain(FACEBOOK_CALL_TO_ACTION_OPTS)
      .keyBy('value')
      .mapValues('translate')
      .value();

  constructor(
    public previewPanelService: PreviewPanelService
  ) {
    this.viewName = '';
    this.previewProps = {
      facebook: {}
    } as PreviewProps;

    this.previewPanel$ = this.previewPanelService.previewPanel$
      .subscribe((update: PreviewPanel) => {
        this.viewName = update.viewName;
        this.previewPanel = update;
        this.defaults = update.defaults;

        switch(this.viewName) {
          case CONSTANTS.MEDIA_TYPES.FACEBOOK:
            Object.keys(update.form.controls).forEach(key => this.previewProps.facebook[key] = update.form.get(key).value);
            break;
          default:
            this.viewName = '';
            throw new Error('ad-render-panel update requires MEDIA_TYPE');
        }
      });
  }

  ngOnDestroy() {
    this.previewPanel$.unsubscribe();
  }
}
