import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../../products/shared/product.service';

@Component({
  selector: 'app-product-lg',
  templateUrl: './product-lg.component.html',
  styleUrls: ['./product-lg.component.scss']
})
export class ProductLgComponent implements OnInit {

  @Input() public product_data: any;
  public btn_title: any;

   constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
