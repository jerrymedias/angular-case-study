import { Directive, DoCheck, ElementRef, Input } from '@angular/core';
import { SortOrder } from '../../route2/route2.component';
@Directive({
  selector: '[sortingArrowImage]'
})
export class SortingArrowImageDirective implements DoCheck {

  @Input() columnCounter: any;
  @Input() column: string = '';
  @Input() selectedPriceSort: string = '';

  constructor(private elementRef: ElementRef) { }

  ngDoCheck(): void {
      if ((this.column && this.columnCounter[this.column] == 2) || this.selectedPriceSort === SortOrder.Descending) {
        this.elementRef.nativeElement.innerHTML = `<img width="20"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAgklEQVRIie3WTQqAIBCG4ZfoCknd/ypBULapRcexjYLaKpysYD4QwR8eZ1bCz2KA1Q9TC+2ADXB+HMBQG62CG2D3UJhdtibe9rjSA+gjON8TrXzhWlWAIe3GLAlPgCVtZQwH3PqzjyaHb6URfIjCCiussMIKK6zwx+G24O5IwZ/rtZz9DysqsOMoqwAAAABJRU5ErkJggg==" />`;
      } else if ((this.column && this.columnCounter[this.column] == 1) || this.selectedPriceSort === SortOrder.Ascending) {
        this.elementRef.nativeElement.innerHTML = `<img width="20"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAh0lEQVRIie3WPQqAMAyG4RfvYNH738RFFF108Dh1MEJ0aEHrL/mgCDb4GNoh8ME0QP0E7GUdSpbwRww22GCDDTbYYIN/AldAB7hAjZOapANgyzLYjQrXw56TPS+1yZIDg3x4AkoF7/eKlDBsu1qffvcudBSnorvT65JOY/gt6BoH9MRv+vsyA6HTKO6WiZQPAAAAAElFTkSuQmCC" />`;
      } else {
        if (this.selectedPriceSort === SortOrder.Recommended) {
          this.elementRef.nativeElement.innerHTML = `<img width="20"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAh0lEQVRIie3WPQqAMAyG4RfvYNH738RFFF108Dh1MEJ0aEHrL/mgCDb4GNoh8ME0QP0E7GUdSpbwRww22GCDDTbYYIN/AldAB7hAjZOapANgyzLYjQrXw56TPS+1yZIDg3x4AkoF7/eKlDBsu1qffvcudBSnorvT65JOY/gt6BoH9MRv+vsyA6HTKO6WiZQPAAAAAElFTkSuQmCC" />
          <img width="20" style="margin-left: -17px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAgklEQVRIie3WTQqAIBCG4ZfoCknd/ypBULapRcexjYLaKpysYD4QwR8eZ1bCz2KA1Q9TC+2ADXB+HMBQG62CG2D3UJhdtibe9rjSA+gjON8TrXzhWlWAIe3GLAlPgCVtZQwH3PqzjyaHb6URfIjCCiussMIKK6zwx+G24O5IwZ/rtZz9DysqsOMoqwAAAABJRU5ErkJggg==" />`;
        } else {
          this.elementRef.nativeElement.innerHTML = '';
        }
      }
  }

}
