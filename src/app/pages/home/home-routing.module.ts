import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from 'src/app/layout/layout-routing.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  Layout.childRoutes(
    [
      {
        path: '',
        component: HomeComponent,
        data: { title: 'Home' } // This is the page title showing in the tab (in browser)
      }
    ]
  )
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
