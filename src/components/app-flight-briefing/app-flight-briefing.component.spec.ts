import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppFlightBriefingComponent } from "./app-flight-briefing.component";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("AppFlightBriefingComponent", () => {
   let component: AppFlightBriefingComponent;
   let fixture: ComponentFixture<AppFlightBriefingComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [AppFlightBriefingComponent],
         providers: [provideHttpClient(), provideHttpClientTesting()],
      }).compileComponents();

      fixture = TestBed.createComponent(AppFlightBriefingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   describe("atLeastOneReportRequired validator", () => {
      it("should validate when at least one report (METAR, TAF, SIGMET) is provided", () => {
         component["briefingForm"].patchValue({
            metar: false,
            taf_longtaf: false,
            sigmet_all: false,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeTruthy();

         component["briefingForm"].patchValue({
            metar: true,
            taf_longtaf: false,
            sigmet_all: false,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeFalsy();

         component["briefingForm"].patchValue({
            metar: false,
            taf_longtaf: true,
            sigmet_all: false,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeFalsy();

         component["briefingForm"].patchValue({
            metar: false,
            taf_longtaf: false,
            sigmet_all: true,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeFalsy();

         component["briefingForm"].patchValue({
            metar: true,
            taf_longtaf: true,
            sigmet_all: false,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeFalsy();

         component["briefingForm"].patchValue({
            metar: false,
            taf_longtaf: true,
            sigmet_all: true,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeFalsy();

         component["briefingForm"].patchValue({
            metar: true,
            taf_longtaf: true,
            sigmet_all: true,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeFalsy();
      });

      it("should not validate when no reports are provided", () => {
         component["briefingForm"].patchValue({
            metar: false,
            taf_longtaf: false,
            sigmet_all: false,
         });
         expect(component["briefingForm"].errors?.["atLeastOneReportRequired"]).toBeTruthy();
      });
   });

   describe("atMostOneReportSelected validator", () => {
      it("should not validate when neither stations nor countries are provided", () => {
         component["briefingForm"].patchValue({
            stations: "  ",
            countries: "  ",
         });
         expect(component["briefingForm"].errors?.["atLeastOneLocationRequired"]).toBeTruthy();
      });




   });
});
