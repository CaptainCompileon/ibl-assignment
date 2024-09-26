;import { TestBed } from '@angular/core/testing';
import {FlightBriefingService} from "./flight-briefing.service";


describe('FlightBriefingServiceTsService', () => {
  let service: FlightBriefingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightBriefingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
