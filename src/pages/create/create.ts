import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Create page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class Create {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Create Page');
  }

}
