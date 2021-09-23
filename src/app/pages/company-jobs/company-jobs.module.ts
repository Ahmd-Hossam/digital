import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyJobsRoutingModule } from './company-jobs-routing.module';
import { CompanyJobsComponent } from './components/company-jobs/company-jobs.component';


@NgModule({
  declarations: [
    CompanyJobsComponent
  ],
  imports: [
    CommonModule,
    CompanyJobsRoutingModule
  ]
})
export class CompanyJobsModule { }
