import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  storage: any;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }


  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';

  itemValue = '';
  items: Observable<any[]>;

  async ngOnInit(){
    await this.storage.create();
  }
}
