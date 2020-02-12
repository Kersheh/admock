import { NgModule } from '@angular/core';

// imports
import { FlexLayoutModule } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxFileDropModule } from 'ngx-file-drop';

// app config
import { AppMaterialModule } from './app-material.module';
import { AppTranslateModule } from './app-translate.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// pipes
import { BigIntegerPipe } from 'src/shared/pipes/big-integer.pipe';

// components
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { FooterComponent } from 'src/components/footer/footer.component';

// view components
import { FacebookComponent } from 'src/components/views/facebook/facebook.component';
import { InstagramComponent } from 'src/components/views/instagram/instagram.component';
import { TwitterComponent } from 'src/components/views/twitter/twitter.component';
import { GoogleSearchComponent } from 'src/components/views/google-search/google-search.component';
import { GoogleDisplayComponent } from 'src/components/views/google-display/google-display.component';
import { PinterestComponent } from 'src/components/views/pinterest/pinterest.component';
import { SnapchatComponent } from 'src/components/views/snapchat/snapchat.component';
import { LinkedinComponent } from 'src/components/views/linkedin/linkedin.component';
import { TiktokComponent } from 'src/components/views/tiktok/tiktok.component';
import { ProfileComponent } from 'src/components/views/profile/profile.component';

// shared components
import { SocialMediaIconComponent } from 'src/components/shared/social-media-icon/social-media-icon.component';
import { LoginDialogComponent } from 'src/components/shared/login-dialog/login-dialog.component';
import { AdRenderPanelComponent } from 'src/components/shared/ad-render-panel/ad-render-panel.component';
import { UploadFileComponent } from 'src/components/shared/upload-file/upload-file.component';

@NgModule({
  imports: [
    AppMaterialModule,
    AppTranslateModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    NgxFileDropModule
  ],
  declarations: [
    BigIntegerPipe,
    AppComponent,
    SidebarComponent,
    SocialMediaIconComponent,
    FooterComponent,
    LoginDialogComponent,
    ProfileComponent,
    FacebookComponent,
    InstagramComponent,
    TwitterComponent,
    GoogleSearchComponent,
    GoogleDisplayComponent,
    PinterestComponent,
    SnapchatComponent,
    LinkedinComponent,
    TiktokComponent,
    AdRenderPanelComponent,
    UploadFileComponent
  ],
  providers: [
    CookieService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class AppModule {}
