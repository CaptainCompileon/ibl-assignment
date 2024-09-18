import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFlightBriefingComponent } from './app-flight-briefing.component';

describe('AppFlightBriefingComponent', () => {
  let component: AppFlightBriefingComponent;
  let fixture: ComponentFixture<AppFlightBriefingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFlightBriefingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFlightBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
