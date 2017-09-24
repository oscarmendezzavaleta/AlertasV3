import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,public alertCtrl: AlertController) {

  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alertas',
      message: 'Esta es una alerta basica desde otra PC',
      buttons: ['Ok']
    });
    alert.present()
  }

}
