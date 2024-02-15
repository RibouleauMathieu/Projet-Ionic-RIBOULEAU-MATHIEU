import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinPage } from './skin.page';

const routes: Routes = [
  {
    path: '',
    component: SkinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinPageRoutingModule {}
