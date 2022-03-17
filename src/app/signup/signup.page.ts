import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registrationForm: FormGroup;
  constructor(public popoverController : PopoverController) { }
  async popclick(event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event
    });
    return await popover.present();
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'username': new FormControl(null,[Validators.required, Validators.minLength(6)]),
      'password': new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
      'verifyPassword': new FormControl(null,Validators.required)
    },
    {
      validators: (control) => {
        if (control.value.password !== control.value.verifyPassword) {
          control.get("verifyPassword").setErrors({ notSame: true });
        }
        return null;
      },
    }
    )
  }
  register(){
    localStorage.setItem('Username',JSON.stringify(this.registrationForm.get('username').value));
    localStorage.setItem('Password',JSON.stringify(this.registrationForm.get('password').value));
    alert("Registration Success");
    console.log(this.registrationForm.value);
    this.registrationForm.reset();
    window.history.back();
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get username() {
    return this.registrationForm.get('username');
  }
}
