import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsModalComponent } from './widgets-modal.component';

describe('WidgetsModalComponent', () => {
  let component: WidgetsModalComponent;
  let fixture: ComponentFixture<WidgetsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
