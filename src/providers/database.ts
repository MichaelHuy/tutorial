import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage, SqlStorage } from "ionic-angular";

/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {

	private storage: Storage;
    private isInstantiated: boolean;

  constructor(public http: Http) {
    console.log('Hello Database Provider');

    if(!this.isInstantiated) {
            this.storage = new Storage(SqlStorage);
            this.isInstantiated = true;
        }
  }

  getStorage() {
        return this.storage;
    }

}
