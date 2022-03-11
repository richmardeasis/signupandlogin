import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PopoverController } from "@ionic/angular"

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {}
  navigatelogin() {
    this.popoverController.dismiss().then(() => {
      setTimeout(() => {
        this.router.navigate(["home"], { replaceUrl: false });
      }, 100);
    });
  }
  navigatesignup() {
    this.popoverController.dismiss().then(() => {
      setTimeout(() => {
        this.router.navigate(["signup"], { replaceUrl: false });
      }, 100);
    });
  }
}
