import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { PostsComponent } from './components/posts/posts.component'
import { CommentsComponent } from './components/comments/comments.component';
import { WidgetsModalComponent } from './components/widgets-modal/widgets-modal.component';
import { LatestActivityComponent } from './components/latest-activity/latest-activity.component'


@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    CommentsComponent,
    WidgetsModalComponent,
    LatestActivityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
