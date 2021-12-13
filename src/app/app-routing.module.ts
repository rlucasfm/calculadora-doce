import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocesComponent } from './views/doces/doces.component';
import { LacosComponent } from './views/lacos/lacos.component';
import { MenuComponent } from './views/menu/menu.component';

const routes: Routes = [
  { path: 'doces',  component: DocesComponent },
  { path: 'lacos',  component: LacosComponent },
  { path: '',   component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
