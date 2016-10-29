import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Toast } from "ionic-native";
import { Database } from "../../providers/database";
/*
	Generated class for the CreatePage page.

	See http://ionicframework.com/docs/v2/components/#navigation for more info on
	Ionic pages and navigation.
*/
@Component({
	selector: 'page-create-page',
	templateUrl: 'create-page.html'
})
export class CreatePage {

	private products: Array<any>;
	public product: any;

	constructor(public navCtrl: NavController, private database: Database) {
		this.products = [];
        this.product = {
            "name": "",
            "price": ""
        }
	}

	ionViewDidLoad() {
		console.log('Hello CreatePage Page');
		this.database.getStorage().get("products").then(result => {
            this.products = result ? JSON.parse(result) : [];
        });
	}

	save() {
        if(this.product.name && this.product.price) {
            this.products.push(this.product);
            this.database.getStorage().set("products", JSON.stringify(this.products));
            this.navCtrl.pop();
        } else {
            Toast.show("Missing Fields...", '5000', 'bottom').subscribe(toast => {});
        }
    }

}
