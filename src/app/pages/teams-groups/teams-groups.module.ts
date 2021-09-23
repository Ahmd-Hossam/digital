import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsGroupsRoutingModule } from './teams-groups-routing.module';
import { TeamsGroupsComponent } from './components/teams-groups/teams-groups.component';


@NgModule({
  declarations: [
    TeamsGroupsComponent
  ],
  imports: [
    CommonModule,
    TeamsGroupsRoutingModule
  ]
})
export class TeamsGroupsModule { }
