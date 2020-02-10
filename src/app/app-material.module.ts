import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatTabsModule,
  MatSelectModule,
  MatButtonToggleModule
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
    MatTabsModule,
    MatSelectModule,
    MatButtonToggleModule
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
    MatTabsModule,
    MatSelectModule,
    MatButtonToggleModule
  ]
})
export class AppMaterialModule {}
