import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CountdownModule } from 'ngx-countdown';
import { ProfileComponent } from './profile/profile.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommentComponent } from './components/comment/comment.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';

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
    CommentComponent,
    ],
  declarations: [
    ProfileComponent,
    CommentComponent,
    CardComponent,
    SliderComponent,
  ],
})
export class SharedModule {}
