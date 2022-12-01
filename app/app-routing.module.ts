import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCasasComponent } from './list-casas/list-casas.component';

const routes: Routes = [
  { path: "", component: ListCasasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
