import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { LootBoxService } from '../loot-box.service';
import { lootCrate } from '../models/lootcrate.model'
import { Player } from '../models/player.model';

@Component({
  selector: 'app-loot-crate',
  templateUrl: './loot-crate.component.html',
  styleUrls: ['./loot-crate.component.css'],
  providers: [LootBoxService]
})

export class LootCrateComponent {


}
