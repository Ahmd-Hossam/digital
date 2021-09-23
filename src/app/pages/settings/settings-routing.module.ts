import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from '../../layout/layout-routing.service'
import { SettingsComponent } from './components/settings/settings.component';
const routes: Routes = [
  Layout.childRoutes([
    {
      path:'',
      component:SettingsComponent,
      data:{title : "Settings"}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
