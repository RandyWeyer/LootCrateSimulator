import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';
import { LootCrateComponent } from './loot-crate/loot-crate.component';

const appRoutes: Routes =
[
    {
        path: "home/:id",
        component: HomeComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "battle/:id",
        component: BattleComponent
    },
    {
        path: "lootBox/:id",
        component: LootCrateComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
