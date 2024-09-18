import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppFlightBriefingComponent} from "../components/app-flight-briefing/app-flight-briefing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFlightBriefingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ibl-assignment-samko';
}
