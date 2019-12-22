import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  public loginForm: FormGroup;
  public hidePassword = true;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitLogin() {
    console.log(this.loginForm.get('email'));
    console.log(this.loginForm.get('password'));
  }
}
