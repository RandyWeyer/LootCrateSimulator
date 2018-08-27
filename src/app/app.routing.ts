import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';

const appRoutes: Routes =
[
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "battle",
        component: BattleComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
