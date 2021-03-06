import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StudentData } from '../route5/route5.service';
import { Route2Service } from './route2.service';

export enum SortOrder {
  Ascending = "ascending",
  Descending = "descending",
  Recommended = "recommended"
}

type ViewTypes = 'GridView' | 'ListView';

interface product {
  category: string,
  id: number,
  description: string,
  image: string,
  price: number,
  title: string
}

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  storeData$: Observable<product[]> | undefined;
  copyOfStoreData: Array<product> = [];
  selectedViewType: ViewTypes = 'GridView';
  loading: boolean = true;
  selectedPriceSort: string = 'recommended';

  constructor(
    private route2Service: Route2Service,
    private elemRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.storeData$ = this.route2Service.getStoreData().pipe(
      tap((data: product[]) => {
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
    this.selectedPriceSort = event.target.id;
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
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(!entry.isIntersecting) return;
        else {
          this.preloadImages(entry.target);
          imageObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px'
    });

    productImages.forEach((eachImage: HTMLImageElement) => {
      imageObserver.observe(eachImage);
    });
  }

  preloadImages(img: any): void {
    const src = img.getAttribute('data-src');
    if(!src) return;
    img.src = src;
  }

}

