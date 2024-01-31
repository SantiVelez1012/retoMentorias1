import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './presentation/core/pages/pages.module';

const routes: Routes = [
  {path: '', redirectTo:'games', pathMatch:'full'},
  {path: 'games', loadChildren: () => import('./presentation/core/pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
