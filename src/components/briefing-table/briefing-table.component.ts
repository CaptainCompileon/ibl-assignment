import { Component, Input } from "@angular/core";
import { DatePipe, formatDate, NgForOf, NgIf } from "@angular/common";
import { ResultQueryGroups } from "../../services/flight-briefing.service";
import { HighlightConditionDirective } from "./highlight-condition.directive";

@Component({
   selector: "app-briefing-table",
   standalone: true,
   imports: [NgForOf, NgIf, HighlightConditionDirective, DatePipe],
   templateUrl: "./briefing-table.component.html",
   styles: ``,
})
export class BriefingTableComponent {
   @Input({ required: true }) results!: ResultQueryGroups;
   protected readonly Object = Object;
}
