import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() public product: any;
  public btn_title: any;


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
