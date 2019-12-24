import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDialogModule,
  MatRippleModule,
  MatMenuModule,
  MatDividerModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    MatRippleModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    MatRippleModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class AppMaterialModule {}
