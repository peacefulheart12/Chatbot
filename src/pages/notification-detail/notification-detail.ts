import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import {NotificationPage} from '../notification/notification';

/**
 * Generated class for the NotificationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-detail',
  templateUrl: 'notification-detail.html',
})
export class NotificationDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationDetailPage');
  }

 
}
