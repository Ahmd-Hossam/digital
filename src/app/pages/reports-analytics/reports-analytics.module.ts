import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsAnalyticsRoutingModule } from './reports-analytics-routing.module';
import { ReportsAnalyticsComponent } from './components/reports-analytics/reports-analytics.component';


@NgModule({
  declarations: [
    ReportsAnalyticsComponent
  ],
  imports: [
    CommonModule,
    ReportsAnalyticsRoutingModule
  ]
})
export class ReportsAnalyticsModule { }
