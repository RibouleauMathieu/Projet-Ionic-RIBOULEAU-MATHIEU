import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinsListPage } from './skins-list.page';

const routes: Routes = [
  {
    path: '',
    component: SkinsListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./skin-new/skin-new.module').then( m => m.SkinNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./skin/skin.module').then( m => m.SkinPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinsListPageRoutingModule {}
