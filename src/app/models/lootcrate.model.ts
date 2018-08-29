import { Player } from './player.model';

export class lootCrate {
  constructor(public name: string, public idleAttack: number, public attack: number, public critChance: number, public criticalDamage: number, public goldRate: number, public itemKey: string) {
    let itemAmount =  4;
    console.log('Before for');
    for(var i = itemAmount; i>0; i--){
      console.log('After for');
      let itemRarity = Math.floor(Math.random() * 100) + 1
      let itemStat = Math.floor(Math.random() * 5) + 1

      if(itemRarity <= 10){
        this.name = 'Epic Lootcrate'
        this.itemKey = '1';
        if(itemStat == 1){
          this.idleAttack += 30;
        } else if(itemStat == 2){
          this.attack += 50
        }else if(itemStat == 3){
          this.critChance += .40
        }else if( itemStat == 4){
          this.criticalDamage += 100
        }else if( itemStat == 5){
          this.goldRate += 100
        }
      } else if(itemRarity <= 30){
        this.name = 'Rare Lootcrate'
        this.itemKey = '2';
        if(itemStat == 1){
          this.idleAttack += 30;
        }else if(itemStat == 2){
          this.attack += 40
        }else if(itemStat == 3){
          this.critChance += .25
        }else if(itemStat == 4){
          this.criticalDamage += 80
        }else if(itemStat == 5){
          this.goldRate += 60
        }
      } else if(itemRarity <= 60){
        this.name = 'Uncommon Lootcrate';
        this.itemKey = '3';
        if(itemStat == 1){
          this.idleAttack += 10;
        }else if(itemStat == 2){
          this.attack += 20
        }else if(itemStat == 3){
          this.critChance += .15
        }else if(itemStat == 4){
          this.criticalDamage += 40
        }else if(itemStat == 5){
          this.goldRate += 30
        }
      } else if(itemRarity <= 100){
        this.name = 'Common Lootcrate'
        this.itemKey = '4';
        if(itemStat == 1){
          this.idleAttack += 5;
        }else if(itemStat == 2){
          this.attack += 10
        }else if(itemStat == 3){
          this.critChance += .08
        }else if(itemStat == 4){
          this.criticalDamage += 20
        }else if(itemStat == 5){
          this.goldRate += 20
        }
      }
      console.log("You got " + "");
    }

  }
}
