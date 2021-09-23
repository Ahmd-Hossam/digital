import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from 'src/app/layout/layout-routing.service';
import { WidgetsComponent } from './components/widgets/widgets.component';

const routes: Routes = [
  Layout.childRoutes([
    {
      path: '',
      component: WidgetsComponent,
      data: { title: 'Widgets' } // This is the page title showing in the tab (in browser)
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
