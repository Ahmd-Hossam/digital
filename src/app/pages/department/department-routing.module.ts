import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from '../../layout/layout-routing.service'
import { DepartmentComponent } from './components/department/department.component';
const routes: Routes = [
  Layout.childRoutes([
    {
      path:'',
      component:DepartmentComponent,
      data:{title:"Department"}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
