import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../account/shared/auth.service';
import { CartService } from '../../cart/shared/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { ProductsCacheService } from '../shared/products-cache.service';
import { ProductRatingService } from '../shared/product-rating.service';
import { ProductService } from '../shared/product.service';

import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { analytics } from 'firebase';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  @Input() public product: Product;
  public productLoading: boolean;

  public user: User;

  public imagesLoaded: string[];
  public imagesUrl: string[];
  public activeImageUrl: string;
  public activeImageIndex: number;

  public selectedQuantity: number;

  public ratingCount: number;
  public ratingValues: number[];
  public selectedRating: any;

  public productFeatured_active: Product[];
  public productFeatured: Product[];

  public products: Product[];
  public products_active: Product[];
  public product_md: Product[];
  public product_md_active: Product[];
  public product_sm: Product[];
  public product_sm_active: Product[];
  public product_xs: Product[];
  public product_xs_active: Product[];
  public title_:any;
  public btn_title: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
    private cartService: CartService,
    private productsCacheService: ProductsCacheService,
    private productService: ProductService,
    private productRatingService: ProductRatingService
  ) {this.loadScripts();}

  loadScripts() {

    // This array contains all the files/CDNs 
    const dynamicScripts = [
      'assets/js/swiper-gallery.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  ngOnInit(): void {

    this.btn_title = this.productService.getButtonTitle();
    this.title_ = localStorage.getItem('products');

    var p = new Array(3);
    for (var i= 0 ; i < 3; i ++){
      p[i] = new String();
    }

    this.imagesUrl = p;

    this.authService.user
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        this.user = user;
      });

    this.ratingValues = [1, 2, 3, 4, 5];
    this.selectedQuantity = 1;
    this.imagesLoaded = [];

    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.getProduct();
      });

      // this.productService
      // .getProductsQuery('widget', true, 8)
      // .pipe(takeUntil(this.unsubscribe$))
      // .subscribe(
      //   (products) => {
      //     this.products = products.slice(0, 4);
      //     this.products_active = products.slice(2, 6);

      //     this.product_md = products.slice(0, 3);
      //     this.product_md_active = products.slice(3, 6);

      //     this.product_sm = products.slice(0, 2);
      //     this.product_sm_active = products.slice(2, 4);

      //     this.product_xs = products.slice(0, 1);
      //     this.product_xs_active = products.slice(1, 2);
      //   },
      //   (err) => console.error(err)
      // );
  }

  private getProduct(): void {
    this.productLoading = true;

    const id = +this.route.snapshot.paramMap.get('id');

    this.productService
      .getProduct(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((product: Product) => {
        if (product) {
          this.product = product;
          this.setupProduct();
          this.productLoading = false;
        } else {
          this.router.navigate(['/404-product-not-found']);
        }
      });
  }

  public onSelectThumbnail(event, index) {
    event.preventDefault();
    this.activeImageUrl = this.product.imageURLs[index];
    this.activeImageIndex = index;
  }

  public onAddToCart() {
    this.cartService.addItem(new CartItem(this.product, this.selectedQuantity));
  }

  public onSelectQuantity(event) {
    this.selectedQuantity = <number>+event.target.value;
  }

  public onRate() {
    const rating = parseInt(this.selectedRating, 10);
    this.productRatingService
      .rateProduct(this.product, rating)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.getProduct();
      });
  }

  public onImageLoad(e: any) {
    this.imagesLoaded.push(e.target.src);
  }

  private setupProduct() {
    if (this.product) {
     // this.checkCategories();
     // this.checkRatings();
      this.activeImageUrl = this.product.imageURLs[0];
      this.activeImageIndex = 0;

      var p = new Array(3);
      this.imagesUrl = new Array(3);
      for (var i= 0 ; i < 3; i ++){
        p[i] = new String();
      }
      var index = 0;
      var loop = 0;
      while (index < 3) {
        if (loop >= this.product.imageURLs.length) {
          loop = 0;
        }
        p[index] = this.product.imageURLs[loop];
        index++;
        loop++;
      }
      this.imagesUrl = p;

    }
  }

  private checkCategories() {
    const categories = Object.keys(this.product.categories).map(
      (category, index, inputArray) => {
        category = index < inputArray.length - 1 ? category + ',' : category;
        return category;
      }
    );
    this.product.categories =
      categories.length >= 1 && !Array.isArray(this.product.categories)
        ? categories
        : [];
  }

  private checkRatings() {
    this.ratingCount = this.product.ratings
      ? Object.keys(this.product.ratings).length
      : 0;

    // check for existing rating
    if (
      this.product.ratings &&
      this.user &&
      Object.keys(this.product.ratings).includes(this.user.uid)
    ) {
      this.selectedRating = this.product.ratings[this.user.uid];
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
