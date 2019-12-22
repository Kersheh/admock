import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UserService, User } from 'src/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy {
  public profileForm: FormGroup;
  public user$: Subscription;
  public isEdit = false;

  constructor(
    public userService: UserService
  ) {
    this.user$ = this.userService.user.subscribe((user: User) => {
      if(user) {
        this.profileForm = new FormGroup({
          email: new FormControl({
            value: user.email,
            disabled: !this.isEdit
          }, [
            Validators.required, Validators.email
          ]),
          firstName: new FormControl({
            value: user.firstName,
            disabled: !this.isEdit
          }, [
            Validators.required
          ]),
          lastName: new FormControl({
            value: user.lastName,
            disabled: !this.isEdit
          }, [
            Validators.required
          ]),
          // profileImage: new FormControl('', [Validators.required])
        });
      }
    });
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }

  toggleEdit(): void {
    this.isEdit = !this.isEdit;
    this.profileForm.enable();
  }

  updateProfile(): void {
    this.toggleEdit();
    this.profileForm.disable();
  }
}
