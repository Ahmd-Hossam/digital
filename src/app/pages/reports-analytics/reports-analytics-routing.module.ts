import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from '../../layout/layout-routing.service'
import { ReportsAnalyticsComponent } from './components/reports-analytics/reports-analytics.component';
const routes: Routes = [
  Layout.childRoutes([
    {
      path:'',
      component:ReportsAnalyticsComponent,
      data:{title: "Reports & analytics"}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsAnalyticsRoutingModule { }
