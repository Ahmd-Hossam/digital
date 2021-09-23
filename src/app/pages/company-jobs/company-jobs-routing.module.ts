import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from '../../layout/layout-routing.service'
import { CompanyJobsComponent } from './components/company-jobs/company-jobs.component';
const routes: Routes = [
  Layout.childRoutes([
    {
      path:'',
      component:CompanyJobsComponent,
      data:{title:"Company & Jobs"}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyJobsRoutingModule { }
