import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacebookComponent } from 'src/components/views/facebook/facebook.component';
import { InstagramComponent } from 'src/components/views/instagram/instagram.component';
import { TwitterComponent } from 'src/components/views/twitter/twitter.component';
import { GoogleSearchComponent } from 'src/components/views/google-search/google-search.component';
import { GoogleDisplayComponent } from 'src/components/views/google-display/google-display.component';
import { PinterestComponent } from 'src/components/views/pinterest/pinterest.component';
import { SnapchatComponent } from 'src/components/views/snapchat/snapchat.component';
import { LinkedinComponent } from 'src/components/views/linkedin/linkedin.component';
import { TiktokComponent } from 'src/components/views/tiktok/tiktok.component';

const routes: Routes = [
  {
    path: 'facebook',
    component: FacebookComponent
  },
  {
    path: 'instagram',
    component: InstagramComponent
  },
  {
    path: 'twitter',
    component: TwitterComponent
  },
  {
    path: 'google-search',
    component: GoogleSearchComponent
  },
  {
    path: 'google-display',
    component: GoogleDisplayComponent
  },
  {
    path: 'pinterest',
    component: PinterestComponent
  },
  {
    path: 'snapchat',
    component: SnapchatComponent
  },
  {
    path: 'linkedin',
    component: LinkedinComponent
  },
  {
    path: 'tiktok',
    component: TiktokComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
