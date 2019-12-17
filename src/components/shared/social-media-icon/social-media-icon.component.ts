import { Component, OnInit, Input } from '@angular/core';
import {
  IconDefinition, faFacebook, faInstagram, faTwitter, faSnapchat
} from '@fortawesome/free-brands-svg-icons';

import CONSTANTS from 'src/shared/constants';

@Component({
  selector: 'app-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.scss']
})
export class SocialMediaIconComponent implements OnInit {
  @Input() private icon: string;

  public faIcon: IconDefinition | null = null;
  private ICONS = {
    [CONSTANTS.MEDIA_TYPES.FACEBOOK]: faFacebook,
    [CONSTANTS.MEDIA_TYPES.INSTAGRAM]: faInstagram,
    [CONSTANTS.MEDIA_TYPES.TWITTER]: faTwitter,
    [CONSTANTS.MEDIA_TYPES.SNAPCHAT]: faSnapchat
  };

  ngOnInit() {
    this.faIcon = this.ICONS[this.icon] ? this.ICONS[this.icon] : null;
  }
}
