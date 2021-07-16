import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})

export class Route6Component implements OnInit {

  divContainerWithBtnlist: Array<string> = [];
  noOfButtonInList: number = 0;

  constructor() { }

  @HostListener("window:scroll")
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      // you're at the bottom of the page
      this.scrolledToBottom();
    }
  }

  ngOnInit(): void {
    this.noOfButtonInList = Math.floor(((
      (window.innerWidth - ((window.innerWidth / 200) * 10))
      / 200) * (window.innerHeight / 200)));
    for (let i = 0; i < this.noOfButtonInList; i++) {
      this.divContainerWithBtnlist.push('Button');
    }
  }

  scrolledToBottom(): void {
    for (let i = 0; i < this.noOfButtonInList; i++) {
      this.divContainerWithBtnlist.push('Button');
    }
  }

  showAlert(btnNumber: number): void {
    alert(`Button in ${btnNumber}${this.givePowerOf(btnNumber.toString())} div clicked`);
  }

  divByIndex(index: number): number {
    return index;
  }

  givePowerOf(btnNumber: string): string {
    const btnEndNo = btnNumber.slice(btnNumber.length - 1, btnNumber.length);
    const btnIsOf11Series = btnNumber.slice(0, 1) == '1' && btnNumber.length == 2 ? true : false;
    return btnIsOf11Series ? 'th' : btnEndNo == '1' ? 'st' : btnEndNo == '2' ? 'nd' : btnEndNo == '3' ? 'rd' : 'th';
  }
}
