import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popovertwo',
  templateUrl: './popovertwo.component.html',
  styleUrls: ['./popovertwo.component.scss'],
})
export class PopovertwoComponent implements OnInit {

  constructor(public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {}

  navigatelogout() {
    this.popoverController.dismiss().then(() => {
      setTimeout(() => {
        this.router.navigate(["home"], { replaceUrl: false });
      }, 100);
    });
  }
}
