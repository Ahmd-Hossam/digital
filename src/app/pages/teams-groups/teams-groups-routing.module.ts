import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Layout } from '../../layout/layout-routing.service'
import { TeamsGroupsComponent } from './components/teams-groups/teams-groups.component';
const routes: Routes = [
  Layout.childRoutes([
    {
      path:'',
      component:TeamsGroupsComponent,
      data:{title: "teams & groups"}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsGroupsRoutingModule { }
