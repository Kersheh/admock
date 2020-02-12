import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TranslateService } from '@ngx-translate/core';

import CONSTANTS from 'src/shared/constants';
import { PreviewPanelService } from 'src/shared/services/preview-panel.service';

const TAB_ORDER = ['image', 'video', 'carousel'];

export const FACEBOOK_CALL_TO_ACTION_OPTS = [
  { value: 'apply', translate: 'FACEBOOK_CTA_BTN_APPLY_NOW' },
  { value: 'book', translate: 'FACEBOOK_CTA_BTN_BOOK_NOW' },
  { value: 'contact', translate: 'FACEBOOK_CTA_BTN_CONTACT_US' },
  { value: 'donate', translate: 'FACEBOOK_CTA_BTN_DONATE_NOW' },
  { value: 'download', translate: 'FACEBOOK_CTA_BTN_DOWNLOAD' },
  { value: 'learn', translate: 'FACEBOOK_CTA_BTN_LEARN_MORE' },
  { value: 'shop', translate: 'FACEBOOK_CTA_BTN_SHOP_NOW' },
  { value: 'signup', translate: 'FACEBOOK_CTA_BTN_SIGN_UP' },
  { value: 'watch', translate: 'FACEBOOK_CTA_BTN_WATCH_MORE' }
];

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
  public viewName = 'facebook';
  public tabSelection = 'image';
  public activeFormGroup: FormGroup;
  public facebookImageFormGroup: FormGroup;
  public facebookFormDefaults: {
    image: {
      pageName: string;
      postMessage: string;
      linkUrl: string;
      linkDesc: string;
      linkCaption: string;
      socialReactions: Array<string>;
      socialLikes: number;
      socialComments: number;
      socialShares: number;
      pageLogo: any;
      adImage: any;
    };
  };

  public CALL_TO_ACTION_OPTS = FACEBOOK_CALL_TO_ACTION_OPTS;
  public PAGE_NAME_MAX_LEN = 30;
  public LINK_URL_MAX_LEN = 30;
  public LINK_DESC_MAX_LEN = 30;
  public LINK_CAPTION_MAX_LEN = 30;

  constructor(
    private fb: FormBuilder,
    private previewPanel: PreviewPanelService,
    private translate: TranslateService
  ) {
    this.facebookImageFormGroup = this.fb.group({
      pageName: ['', Validators.maxLength(this.PAGE_NAME_MAX_LEN)],
      postMessage: [''],
      ctaButton: [''],
      linkUrl: ['', Validators.maxLength(this.LINK_URL_MAX_LEN)],
      linkDesc: ['', Validators.maxLength(this.LINK_DESC_MAX_LEN)],
      linkCaption: ['', Validators.maxLength(this.LINK_CAPTION_MAX_LEN)],
      socialReactions: [[]],
      socialLikes: [''],
      socialComments: [''],
      socialShares: [''],
      pageLogo: [],
      adImage: []
    });

    this.facebookFormDefaults = {
      image: {
        pageName: this.translate.instant('FACEBOOK_PREVIEW_DEFAULT_PAGE_NAME'),
        postMessage: this.translate.instant('FACEBOOK_PREVIEW_DEFAULT_POST_MESSAGE'),
        linkUrl: this.translate.instant('FACEBOOK_PREVIEW_DEFAULT_LINK_URL'),
        linkDesc: this.translate.instant('FACEBOOK_PREVIEW_DEFAULT_LINK_DESC'),
        linkCaption: this.translate.instant('FACEBOOK_PREVIEW_DEFAULT_LINK_CAPTION'),
        socialReactions: [],
        socialLikes: 0,
        socialComments: 0,
        socialShares: 0,
        pageLogo: null,
        adImage: null
      }
    };

    this.activeFormGroup = this.facebookImageFormGroup;
    this.tabSelection = TAB_ORDER[0];
  }

  ngOnInit() {
    this.previewPanel.setForm(CONSTANTS.MEDIA_TYPES.FACEBOOK, this.activeFormGroup, this.tabSelection, this.facebookFormDefaults);

    this.facebookImageFormGroup.valueChanges.subscribe(() => {
      this.previewPanel.setForm(CONSTANTS.MEDIA_TYPES.FACEBOOK, this.activeFormGroup, this.tabSelection, this.facebookFormDefaults);
    });
  }

  tabChange(tabChangeEvent: MatTabChangeEvent) {
    this.tabSelection = TAB_ORDER[tabChangeEvent.index];
    switch(this.tabSelection) {
      case 'image':
        this.activeFormGroup = this.facebookImageFormGroup;
        break;
      case 'video':
        this.activeFormGroup = this.facebookImageFormGroup;
        break;
      case 'carousel':
        this.activeFormGroup = this.facebookImageFormGroup;
        break;
    }

    this.previewPanel.setForm(CONSTANTS.MEDIA_TYPES.FACEBOOK, this.activeFormGroup, this.tabSelection, this.facebookFormDefaults);
  }

  updateSelectedReactions(selectedReactionChangeEvent: MatButtonToggleChange) {
    const prevSelectedReactions = this.facebookImageFormGroup.get('socialReactions').value;
    const selectedReactions = prevSelectedReactions.includes(selectedReactionChangeEvent.value) ?
      prevSelectedReactions.filter((value: string) => value !== selectedReactionChangeEvent.value) :
      prevSelectedReactions.concat(selectedReactionChangeEvent.value);

    this.facebookImageFormGroup.patchValue({ socialReactions: selectedReactions });
  }

  setPageLogo($event: any) {
    this.facebookImageFormGroup.patchValue({ pageLogo: $event });
  }

  setPageImage($event: any) {
    this.facebookImageFormGroup.patchValue({ adImage: $event });
  }
}
