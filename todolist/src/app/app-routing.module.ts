import { PendingComponent } from './pending/pending.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcludedComponent } from './concluded/concluded.component';
import { AddtaskComponent } from './addtask/addtask.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pending', component: PendingComponent},
  {path: 'concluded', component: ConcludedComponent},
  {path: 'addtask/:id', component: AddtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
