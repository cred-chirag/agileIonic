import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forgot-modal',
  templateUrl: 'forgot-modal.html',
})
export class ForgotModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotModalPage');
  }

  dismiss() {
    this.viewController.dismiss();
  }

}
