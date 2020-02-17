import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Subscription } from 'rxjs';

import CONSTANTS from 'src/shared/constants';
import { PreviewPanelService } from 'src/shared/services/preview-panel.service';

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

const FACEBOOK_AD_TYPES = [
  {
    value: 'image',
    translate: 'Image',
    icon: 'photo_camera'
  },
  {
    value: 'video',
    translate: 'Video',
    icon: 'videocam'
  },
  {
    value: 'carousel',
    translate: 'Carousel',
    icon: 'view_carousel'
  }
];

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public tabIndex: number;
  @Input() public updateAdRenderPanel: Subject<number>;
  @Output() public isFormDirty = new EventEmitter<boolean>();

  public updateAdRenderPanel$: Subscription;
  public formChanges$: Subscription;
  public viewName = 'facebook';
  public tabSelection = 'image';
  public activeFormGroup: FormGroup;
  public facebookFormGroup: FormGroup;
  public facebookFormDefaults: {
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

  public FACEBOOK_AD_TYPES = FACEBOOK_AD_TYPES;
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
    this.facebookFormGroup = this.fb.group({
      adType: [FACEBOOK_AD_TYPES[0]],
      pageName: ['', Validators.maxLength(this.PAGE_NAME_MAX_LEN)],
      postMessage: [''],
      ctaButton: [''],
      linkUrl: ['', Validators.maxLength(this.LINK_URL_MAX_LEN)],
      linkDesc: ['', Validators.maxLength(this.LINK_DESC_MAX_LEN)],
      linkCaption: ['', Validators.maxLength(this.LINK_CAPTION_MAX_LEN)],
      socialReactions: [[]],
      socialLikes: [0],
      socialComments: [0],
      socialShares: [0],
      pageLogo: [],
      adImage: []
    });

    this.facebookFormDefaults = {
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
    };

    this.activeFormGroup = this.facebookFormGroup;
  }

  ngOnInit(): void {
    this.previewPanel.setForm(CONSTANTS.MEDIA_TYPES.FACEBOOK, this.activeFormGroup, this.facebookFormDefaults);

    // watch for form changes to update ad render panel view
    this.formChanges$ = this.facebookFormGroup.valueChanges.subscribe(() => {
      // console.log(this.facebookFormGroup.pristine);
      this.previewPanel.setForm(CONSTANTS.MEDIA_TYPES.FACEBOOK, this.activeFormGroup, this.facebookFormDefaults);
    });

    // update active ad render panel view on parent tab change
    this.updateAdRenderPanel$ = this.updateAdRenderPanel.subscribe((index: number) => {
      if(index === this.tabIndex) {
        this.previewPanel.setForm(CONSTANTS.MEDIA_TYPES.FACEBOOK, this.activeFormGroup, this.facebookFormDefaults);
      }
    });
  }

  ngOnDestroy(): void {
    this.formChanges$.unsubscribe();
    this.updateAdRenderPanel$.unsubscribe();
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    // watch for changes to ensure correct ad panel view is updated on first tab deletion
    if(
      simpleChanges.tabIndex.currentValue !== simpleChanges.tabIndex.previousValue &&
      simpleChanges.tabIndex.currentValue === 0
    ) {
      this.previewPanel.setForm(CONSTANTS.MEDIA_TYPES.FACEBOOK, this.activeFormGroup, this.facebookFormDefaults);
    }
  }

  updateSelectedReactions(selectedReactionChangeEvent: MatButtonToggleChange): void {
    this.facebookFormGroup.patchValue({ socialReactions: selectedReactionChangeEvent.value });
  }

  setPageLogo($event: any): void {
    this.facebookFormGroup.patchValue({ pageLogo: $event });
  }

  setPageImage($event: any): void {
    this.facebookFormGroup.patchValue({ adImage: $event });
  }
}
