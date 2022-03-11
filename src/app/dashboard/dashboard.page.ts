import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopovertwoComponent } from '../popovertwo/popovertwo.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  labelusername: string;

  constructor(public popoverController : PopoverController) {
    let lblusername = JSON.parse(sessionStorage.getItem('Username'));
    this.labelusername = `Welcome ${lblusername} to nothing. Thank You!`;
   }

  async popclick(event) {
    const popover = await this.popoverController.create({
      component: PopovertwoComponent,
      event
    });
    return await popover.present();
  }

  ngOnInit() {
  }

  set 
}
