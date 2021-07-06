import { asLiteral } from '@angular/compiler/src/render3/view/util';
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
    alert(`Button in ${btnNumber}th div clicked`);
  }

  divByIndex(index: number): number {
    return index;
  }

}
