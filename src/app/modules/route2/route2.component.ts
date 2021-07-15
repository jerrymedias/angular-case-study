import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StudentData } from '../route5/route5.service';
import { Route2Service } from './route2.service';

enum SortOrder {
  Ascending = "ascending",
  Descending = "descending",
  Recommended = "recommended"
}

type ViewTypes = 'GridView' | 'ListView';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  storeData$: Observable<any[]> | undefined;
  copyOfStoreData: Array<any> = [];
  selectedViewType: ViewTypes = 'GridView';
  loading: boolean = true;

  constructor(
    private route2Service: Route2Service,
    private elemRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.storeData$ = this.route2Service.getStoreData().pipe(
      tap((data: StudentData[]) => {
        this.copyOfStoreData = data;
        setTimeout(() => {
          this.lazyLoadProductImages();
        }, 0);
      })
    );
  }

  changeView(event: any): void {
    this.selectedViewType = event.target.id;
  }

  sortByPrice(event: any): void {
    if (event.target.id === SortOrder.Recommended) {
      this.storeData$ = of(this.copyOfStoreData);
    } else {
      let products = [...this.copyOfStoreData];
      products.sort((a, b) => (event.target.id === SortOrder.Ascending ? a.price < b.price : a.price > b.price) ? -1 : 1);
      this.storeData$ = of(products);
    }
  }

  lazyLoadProductImages(): void {
    const productImages = this.elemRef.nativeElement.querySelectorAll('[data-src]');
    const imageObserver = new IntersectionObserver((entries, imageObserver) => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        else {
          this.preloadImages(entry.target);
          imageObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px'
    });

    productImages.forEach((eachImage: any) => {
      imageObserver.observe(eachImage);
    });
  }

  preloadImages(img: any): void {
    const src = img.getAttribute('data-src');
    if(!src) return;
    img.src = src;
  }

}

