import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../../products/shared/product.service';

@Component({
  selector: 'app-product-sm',
  templateUrl: './product-sm.component.html',
  styleUrls: ['./product-sm.component.scss']
})
export class ProductSmComponent implements OnInit {

  @Input() public product_sm: any;
  public btn_title: any;

   constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
