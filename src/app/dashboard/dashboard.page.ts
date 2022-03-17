import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopovertwoComponent } from '../popovertwo/popovertwo.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  base64: string;
  selectedFile: any;
  preview: string;
  userInformationForm: FormGroup;
  userPasswordForm: FormGroup;
  labellastname: any;
  labelfirstname: any;
  labelmobilenumber: any;
  labelemail: any;
  



  constructor(public popoverController : PopoverController) {
    let lastname = JSON.parse(localStorage.getItem('LastName'));
    let firstname = JSON.parse(localStorage.getItem('FirstName'));
    let mobilenumber = JSON.parse(localStorage.getItem('MobileNumber'));
    let email = JSON.parse(localStorage.getItem('Email'));
    this.labellastname = lastname;
    this.labelfirstname = firstname;
    this.labelmobilenumber = mobilenumber;
    this.labelemail = email;
   }

  async popclick(event) {
    const popover = await this.popoverController.create({
      component: PopovertwoComponent,
      event
    });
    return await popover.present();
  }

  ngOnInit() {
    this.preview = localStorage.getItem('Image');

 


    this.userInformationForm = new FormGroup({
      'lastname': new FormControl(null, Validators.required),
      'firstname': new FormControl(null, Validators.required),
      'mobilenumber': new FormControl(null, [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      

    })
    this.userPasswordForm = new FormGroup({
      'newpass': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
      'verifynewpass': new FormControl(null, Validators.required),
    },
    {
      validators: (control) => {
        if (control.value.newpass !== control.value.verifynewpass) {
          control.get("verifynewpass").setErrors({ notSame: true });
        }
        return null;
      },
    }
    )
    
    
    
    
  }

  updateinfo() {
    let username = JSON.parse(localStorage.getItem('Username'));
    localStorage.setItem('LastName',JSON.stringify(this.userInformationForm.get('lastname').value));
    localStorage.setItem('FirstName',JSON.stringify(this.userInformationForm.get('firstname').value));
    localStorage.setItem('MobileNumber',JSON.stringify(this.userInformationForm.get('mobilenumber').value));
    localStorage.setItem('Email',JSON.stringify(this.userInformationForm.get('email').value));
    alert(`Update ${username} Information Successfully`);


  }

  updatepass() {
    localStorage.setItem('Password',JSON.stringify(this.userPasswordForm.get('newpass').value));
    alert("Update Password Successfully");
    this.userPasswordForm.reset();

  }
  
  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
    }
  }
  upload() {
    localStorage.setItem('Image', this.base64);
    this.preview = localStorage.getItem('Image');
    alert("Upload Successfully.");

  }
  
  get newpass() {
    return this.userPasswordForm.get('newpass');
  }


}