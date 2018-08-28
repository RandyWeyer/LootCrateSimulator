import { Player } from './player.model';

export class lootCrate {
  constructor(public name: string, public itemRarity: number, public idleAttack: number, public attack: number, public critChance: number, public criticalDamage: number, public gold: number) {
    this.itemRarity = Math.floor(Math.random() * 100) + 1
    if(this.itemRarity <= 10){
      this.name = 'Epic Lootcrate'
      this.idleAttack += 30;
      this.attack += 50
      this.critChance += .40
      this.criticalDamage += 100
      this.gold += 100
    } else if(this.itemRarity <= 30){
      this.name = 'Rare Lootcrate'
      this.idleAttack += 30;
      this.attack += 40
      this.critChance += .25
      this.criticalDamage += 80
      this.gold += 60
    } else if(this.itemRarity <= 60){
      this.name = 'Uncommon Lootcrate'
      this.idleAttack += 10;
      this.attack += 20
      this.critChance += .15
      this.criticalDamage += 40
      this.gold += 30
    } else if(this.itemRarity <= 100){
      this.name = 'Common Lootcrate'
      this.idleAttack += 5;
      this.attack += 10
      this.critChance += .08
      this.criticalDamage += 20
      this.gold += 20
    }
  }
}
