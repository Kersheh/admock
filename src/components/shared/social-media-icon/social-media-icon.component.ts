import { Component, OnInit, Input } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import {
  IconDefinition, faFacebook, faInstagram, faTwitter, faGoogle, faPinterest,
  faSnapchat, faLinkedin, faDiaspora
} from '@fortawesome/free-brands-svg-icons';

import CONSTANTS from 'src/shared/constants';

@Component({
  selector: 'app-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.scss']
})
export class SocialMediaIconComponent implements OnInit {
  @Input() private icon: string;

  public activeIcon: {
    icon: IconDefinition,
    class?: string | undefined
  };
  private ICONS = {
    [CONSTANTS.MEDIA_TYPES.FACEBOOK]: { icon: faFacebook },
    [CONSTANTS.MEDIA_TYPES.INSTAGRAM]: { icon: faInstagram },
    [CONSTANTS.MEDIA_TYPES.TWITTER]: { icon: faTwitter },
    [CONSTANTS.MEDIA_TYPES.GOOGLE_SEARCH]: { icon: faGoogle },
    [CONSTANTS.MEDIA_TYPES.GOOGLE_DISPLAY]: { icon: faGoogle, class: 'google-display' },
    [CONSTANTS.MEDIA_TYPES.PINTEREST]: { icon: faPinterest },
    [CONSTANTS.MEDIA_TYPES.SNAPCHAT]: { icon: faSnapchat },
    [CONSTANTS.MEDIA_TYPES.LINKEDIN]: { icon: faLinkedin },
    [CONSTANTS.MEDIA_TYPES.TIKTOK]: { icon: faQuestion, class: 'tiktok' }
  };

  ngOnInit() {
    this.activeIcon = this.ICONS[this.icon];
  }
}
