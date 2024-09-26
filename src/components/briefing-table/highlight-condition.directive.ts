import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCondition]',
  standalone: true,
})
export class HighlightConditionDirective implements OnChanges {

  @Input({required: true}) appHighlightCondition!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlightCondition']) {
      this.applyHighlight();
    }
  }

  applyHighlight() {
    const pattern = /(BKN|FEW|SCT)(\d{3})/g;
    const matches = this.appHighlightCondition.match(pattern);

    if (matches) {
      let coloredText = this.appHighlightCondition;

      matches.forEach((match) => {
        // const type = match.slice(0, 3);
        const number = parseInt(match.slice(3), 10);

        let colorClass = number <= 30 ? 'text-sky-300' : 'text-red-400';
        coloredText = coloredText.replace(match, `<span class="${colorClass}"">${match}</span>`);
      });

      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', coloredText);
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.appHighlightCondition);
    }
  }
}
