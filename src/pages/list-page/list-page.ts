import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreatePage } from "../../pages/create-page/create-page";
import { Database } from "../../providers/database";

/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html'
})
export class ListPage {
	public products: Array<any>;
    public showingWelcome: boolean;

  constructor(public navCtrl: NavController, private database: Database) {
  	        this.products = [];
        this.showingWelcome = true;
  }

  ionViewDidLoad() {
    console.log('Hello ListPage Page');
            this.database.getStorage().get("products").then(result => {
            this.products = result ? JSON.parse(result) : [];
        });
        this.database.getStorage().get("welcome").then(result => {
            this.showingWelcome = result ? false : true;
        });
  }

  dismissWelcome() {
        this.showingWelcome = false;
        this.database.getStorage().set("welcome", this.showingWelcome);
    }

    add() {
        this.navCtrl.push(CreatePage);
    }

}
