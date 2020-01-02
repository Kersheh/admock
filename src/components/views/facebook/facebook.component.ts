import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
  public facebookFormGroup: FormGroup;

  public PAGE_NAME_MAX_LEN = 30;
  public LINK_HEADER_MAX_LEN = 30;
  public LINK_DESC_MAX_LEN = 30;
  public LINK_CAPTION_MAX_LEN = 30;

  public callToActionOpts = [
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

  constructor() {
    this.facebookFormGroup = new FormGroup({
      pageName: new FormControl('', [
        Validators.maxLength(this.PAGE_NAME_MAX_LEN)
      ])
    });
  }

  ngOnInit() {}
}
