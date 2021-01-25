import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../../products/shared/product.service';

@Component({
  selector: 'app-product-md',
  templateUrl: './product-md.component.html',
  styleUrls: ['./product-md.component.scss']
})
export class ProductMdComponent implements OnInit {

  @Input() public product_md: any;
  public btn_title: any;

   constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
