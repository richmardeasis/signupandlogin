import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm: FormGroup;
  
  constructor(public popoverController : PopoverController, private router: Router) {
  }

  async popclick(event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event
    });
    return await popover.present();
  }

  

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  login(){
    let storedusername = JSON.parse(localStorage.getItem('Username'));
    let storedpassword = JSON.parse(localStorage.getItem('Password'));
    let inputusername = this.loginForm.get('username').value;
    let inputpassword = this.loginForm.get('password').value;
    if(inputusername === storedusername && inputpassword === storedpassword) {
      alert("Successfully Login.");
      this.router.navigate(['../dashboard']);
    }else{
      alert("Wrong Username or Password.");
    }

  }
}

