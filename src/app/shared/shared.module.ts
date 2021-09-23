import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxTagsModule } from 'ngx-tags-input-box';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxDatesPickerModule } from 'ngx-dates-picker';
import { CountdownModule } from 'ngx-countdown';
import { ComplexityComponent } from './components/complexity/complexity.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FileComponent } from './components/file/file.component';
import { TagsComponent } from './components/tags/tags.component';
import { StatusComponent } from './components/status/status.component';



@NgModule({
  imports: [
    CommonModule,
    CountdownModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxTagsModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule,
    NgApexchartsModule,
    NgxDatesPickerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    FormsModule,
    CountdownModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule,
    NgxTagsModule,
    ComplexityComponent,
    ProgressBarComponent,
    FileComponent,
    TagsComponent,
    StatusComponent,
    ],
  declarations: [
    FormControlsComponent,
    ComplexityComponent,
    ProgressBarComponent,
    FileComponent,
    TagsComponent,
    StatusComponent,
  ],
})
export class SharedModule {}
