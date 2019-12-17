import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class AppMaterialModule {}
