import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-p-widget',
  templateUrl: './p-widget.component.html',
  styleUrls: ['./p-widget.component.scss']
})
export class PWidgetComponent implements OnInit {

  private unsubscribe$ = new Subject();
  // @Input() public products: Product[];
  // @Input() public products_active: Product[];
  public products: Product[];
  public products_active: Product[];
  public product_md: Product[];
  public product_md_active: Product[];
  public product_sm: Product[];
  public product_sm_active: Product[];
  public product_xs: Product[];
  public product_xs_active: Product[];

  public product_data: any;
  public product_data_md: any;
  public product_data_sm: any;
  public product_full: any;

  public btn_title: any;

  constructor(
    private productService: ProductService,
  ) { this.loadScripts(); }

  loadScripts() {

    // This array contains all the files/CDNs 
    const dynamicScripts = [
      'assets/js/product-swiper.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  ngOnInit() {

    var p = new Array(12);
    var p_ = new Product();

    for (var i = 0; i < p.length; i++) {
      p[i] = new Product();
    }
    this.product_data = p;

    this.btn_title = this.productService.getButtonTitle();

    this.productService
      .getProductsQuery('widget', true, 12)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (products) => {

          var index = 0;
          var loop = 0;
          while (index < 12) {
            if (loop >= products.length) {
              loop = 0;
            }

            p[index] = products[loop];
            index++;
            loop++;
          }

          this.product_data = p;


          // this.product_data = products;

          // this.products = products.slice(0, 4);
          // this.products_active = products.slice(2, 6);

          // this.product_md = products.slice(0, 3);
          // this.product_md_active = products.slice(3, 6);
          // this.product_data_md = [{"data": this.product_md}, {"data":this.product_md_active}];

          // this.product_sm = products.slice(0, 2);
          // this.product_sm_active = products.slice(2, 4);
          // this.product_data_sm = [{"data": products.slice(0, 2)}, {"data": products.slice(2, 4)}, {"data": products.slice(4, 6)}];

          // this.product_xs = products;
          // this.product_xs_active = products.slice(1, 2);
        },
        (err) => console.error(err)
      );
  }

}
