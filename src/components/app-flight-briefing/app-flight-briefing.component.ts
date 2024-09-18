import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-app-flight-briefing',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './app-flight-briefing.component.html',
  styleUrl: './app-flight-briefing.component.scss'
})
export class AppFlightBriefingComponent implements OnInit {
  protected briefingForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.briefingForm = this.fb.group({
      metar: [false],
      taf: [false],
      sigmet: [false],
      airports: [''],
      countries: ['']
    }, { validators: [this.atLeastOneReportValidator, this.atLeastOneLocationValidator] });
  }

  protected atLeastOneReportValidator(group: FormGroup) {
    const metar = group.get('metar')?.value;
    const taf = group.get('taf')?.value;
    const sigmet = group.get('sigmet')?.value;
    return (metar || taf || sigmet) ? null : { atLeastOneReportRequired: true };
  }

  protected atLeastOneLocationValidator(group: FormGroup) {
    const airports = group.get('airports')?.value;
    const countries = group.get('countries')?.value;
    return (airports.trim() || countries.trim()) ? null : { atLeastOneLocationRequired: true };
  }

  protected onSubmit() {
    if (this.briefingForm.valid) {
      // Send HTTP POST to OPMET Query JSON-RPC web service
      console.log(this.briefingForm.value);
    }
  }
}
