import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CountdownModule } from 'ngx-countdown';
import { ProfileComponent } from './profile/profile.component';
import { BirthdaysComponent } from '././components/birthdays/birthdays.component'

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ActionListComponent } from './components/action-list/action-list.component';
import { PagesComponent } from './components/pages/pages.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { TripsComponent } from './components/trips/trips.component';
import { CoinsComponent } from './components/coins/coins.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { SkeletonLoaderComponent } from './plugins/skeleton-loader/skeleton-loader.component';
import { PrayersComponent } from './components/prayers/prayers.component';
import { TestSkeletonComponent } from './plugins/test-skeleton/test-skeleton.component';


@NgModule({
  imports: [
    CommonModule,
    CountdownModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSkeletonLoaderModule,
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      //"imageWidth": "89",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true})
  ],
  exports: [
    FormsModule,
    CountdownModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    BirthdaysComponent,
    ActionListComponent,
    FeedsComponent,
    MeetingsComponent,
    PagesComponent,
    TripsComponent,
    WeatherComponent,
    CoinsComponent,
    SidePanelComponent,
    SkeletonLoaderComponent,
    PrayersComponent,
    TestSkeletonComponent
    ],
  declarations: [
    ProfileComponent,
    BirthdaysComponent,
    ActionListComponent,
    PagesComponent,
    FeedsComponent,
    WeatherComponent,
    MeetingsComponent,
    TripsComponent,
    CoinsComponent,
    SidePanelComponent,
    SkeletonLoaderComponent,
    PrayersComponent,
    TestSkeletonComponent
  ],
})
export class SharedModule {}
