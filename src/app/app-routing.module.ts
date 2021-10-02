import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyJobsModule } from './pages/company-jobs/company-jobs.module';
import { DepartmentModule } from './pages/department/department.module';
import { ReportsAnalyticsModule } from './pages/reports-analytics/reports-analytics.module';
import { ProfileComponent } from './shared/profile/profile.component';


const routes: Routes = [
  // Form controls page
  { path: 'profile', component: ProfileComponent },

  // Pages without Layout
 
  {
    path: 'oops',
    loadChildren: () =>
      import('./pages/oops/oops.module').then((a) => a.OopsModule),
  },
 
  // Pages with Layout
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (a) => a.HomeModule
      )
  },

  {
    path:'company-jobs',
    loadChildren:()=>
    import('./pages/company-jobs/company-jobs.module').then(
      a => CompanyJobsModule
    )
  },

  {
    path:"department",
    loadChildren:()=> 
    import('./pages/department/department.module').then(
      a => DepartmentModule
    )
  },

  {
    path:"reports-analytics",
    loadChildren:()=>
    import('./pages/department/department.module').then(
      a => ReportsAnalyticsModule
    )
  },

  {
    path:"settings",
    loadChildren:()=>
    import('./pages/settings/settings.module').then(
      a => a.SettingsModule
    )
  },

  {
    path:'teams-groups',
    loadChildren:()=>
    import('./pages/teams-groups/teams-groups.module').then(
      a => a.TeamsGroupsModule
    )
  },

  {
    path: 'widgets',
    loadChildren: () =>
      import('./pages/widgets/widgets.module').then(
        (a) => a.WidgetsModule
      ),
  },
 
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'oops/not-found',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
