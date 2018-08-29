import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { lootCrate } from './models/lootcrate.model'

@Injectable()
export class LootCrateService {
  lootCrate: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase)
  {
    this.lootCrate = database.list('lootCrate');
  }

}
