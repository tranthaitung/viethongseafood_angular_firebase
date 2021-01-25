import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { MessageService } from '../../messages/message.service';
import { ProductService } from '../../products/shared/product.service';
import { ProductsCacheService } from '../../products/shared/products-cache.service';
import { PromoService } from '../shared/promo.service';

import { Product } from '../../models/product.model';
import { Promo } from '../../models/promo.model';

import { Schema } from '../../../../data/demo-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  public products: Product[];
  public productsFeatured: any;
  public productsNewArrivals: Product[];
  public productsOnSale: Product[];
  public productsBestRated: Product[];
  public productFeatured: Product[];
  public productFeatured_active: Product[];
  public promos: Promo[];
  public imageFeatureUrl: any;
  public about: any;
  public aboutIntro: any;
  public productIntro: any;
  public aquacutuleIntro: any;
  public aquacutule: any;
  public aboutImgUrl: any;
  public mainSlideImgUrl: any;
  public certificatedImgUrl: String[];
  public content: any;
  public metadata: any;
  public processing: any;
  public processingIntro: any;
  public news: any[];

  public btn_title: any;
  public news_title: any;
  public certificated:any;
  public intro_title:any;


  constructor(
    private messageService: MessageService,
    private productsCache: ProductsCacheService,
    private productService: ProductService,
    private promoService: PromoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.intro_title = "Viet Hong Seafood";
    if (localStorage.getItem('selectedLanguage') == 'vn') {
      this.intro_title = "Việt Hồng Seafood";
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.btn_title = this.productService.getButtonTitle();
    this.news_title = this.productService.getNewsTitle();


    //get imageFeatureUrl
    this.productService.getImageFeatureUrl()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.imageFeatureUrl = <any[]>data[0];

        this.aboutImgUrl = this.imageFeatureUrl["about"];
        this.mainSlideImgUrl = this.imageFeatureUrl["mainslider"];
        this.certificatedImgUrl = this.imageFeatureUrl["certificated"];
      });

    // content for home-page
    this.productService.getContent()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((metadata) => {
        this.metadata = <any[]>metadata;

        for (let data of this.metadata) {
          if (data['id'] == 'about') {
            // this.about = data['des'];
            for (var index of data['des']) {
              if (index['id'] == 'intro') {
                this.about = index;
                break;
              }
            }

          }
          else if (data['id'] == 'product') {
            for (var index of data['des']) {
              if (index['id'] == 'intro') {
                this.productIntro = index;
                break;
              }
            }
          }
          else if (data['id'] == 'aquacutule') {
            for (var index of data['des']) {
              if (index['id'] == 'intro') {
                this.aquacutuleIntro = index;
              }
              else {
                this.aquacutule = index['des'];
              }
            }
          }
          else if (data['id'] == 'certificated') {
            this.certificated = data['des'][0];
          }

        }

      });

    //get about
    // this.productService.getAbout()
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((data) => {
    //     let info = <any[]>data;
    //     if (info == null) {
    //       this.about = [{ header: '', content: '' }];
    //     } else {
    //       for (var index of info) {
    //         if (index['id'] == '1') {
    //           this.about = index;
    //           break;
    //         }
    //       }
    //     }
    //   });


    this.productService
      .getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((products) => {
        this.products = <Product[]>products;
      });

    this.productService
      .getFeaturedProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (products) => {
          this.productsFeatured = products;
        },
        (err) => console.error(err)
      );

    this.productService
      .getProductsByDate(3)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (products) => {
          this.productsNewArrivals = products;
        },
        (err) => console.error(err)
      );

    this.productService
      .getProductsByRating(3)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (products) => {
          this.productsBestRated = products;
        },
        (err) => console.error(err)
      );

    this.productService
      .getProductsQuery('widget', true, 8)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (products) => {
          // this.productsOnSale = products;
          //  this.productFeatured = products;
          this.productFeatured_active = products.slice(0, 4);
          this.productFeatured = products.slice(4, 8);
        },
        (err) => console.error(err)
      );

    this.promoService
      .getPromos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((promos) => {
        this.promos = promos;
      });

    // this.news = Schema.news;

    //get imageFeatureUrl
    this.productService.getNews()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.news = data;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
