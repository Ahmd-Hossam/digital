import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { LastActivityComponent } from './components/last-activity/last-activity.component';
import { TripsComponent } from './components/trips/trips.component';
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { PostsComponent } from './components/posts/posts.component';
import { WeatherComponent } from './components/weather/weather.component';

import { SharedModule } from '../../shared/shared.module'


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    FeedsComponent,
    MeetingsComponent,
    TripsComponent,
    BirthdaysComponent,
    ActionListComponent,
    PostsComponent,
    LastActivityComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
