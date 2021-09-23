import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGroupsComponent } from './teams-groups.component';

describe('TeamsGroupsComponent', () => {
  let component: TeamsGroupsComponent;
  let fixture: ComponentFixture<TeamsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
