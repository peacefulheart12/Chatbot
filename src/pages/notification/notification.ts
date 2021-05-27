import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import{NotificationDetailPage} from '../notification-detail/notification-detail';


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  navigateToHome(){
    console.log("heeo");
   this.navCtrl.push(HomePage);
  }

  navigateToDetail(){
     this.navCtrl.push(NotificationDetailPage);
     }



}
