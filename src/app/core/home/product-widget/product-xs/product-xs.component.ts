import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../../products/shared/product.service';

@Component({
  selector: 'app-product-xs',
  templateUrl: './product-xs.component.html',
  styleUrls: ['./product-xs.component.scss']
})
export class ProductXsComponent implements OnInit {

  @Input() public product_xs: any;

  public btn_title: any;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
