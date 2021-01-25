import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../products/shared/product.service';

@Component({
  selector: 'app-product-box-data',
  templateUrl: './product-box-data.component.html',
  styleUrls: ['./product-box-data.component.scss']
})
export class ProductBoxDataComponent implements OnInit {

  @Input() public product: any;
  public btn_title: any;


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }
}
