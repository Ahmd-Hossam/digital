import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSkeletonComponent } from './test-skeleton.component';

describe('TestSkeletonComponent', () => {
  let component: TestSkeletonComponent;
  let fixture: ComponentFixture<TestSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
