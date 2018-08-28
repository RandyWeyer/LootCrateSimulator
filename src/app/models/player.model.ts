import { lootCrate } from './lootcrate.model'

export class Player
{
  constructor(public username: string, public userpassword: string, public level: number, public idleAttack: number, public attack: number, public critChance: number, public criticalDamage: number, public gold: number, public goldRate: number, public playerLoot: string[], public isActive: boolean = false){
   }

}
