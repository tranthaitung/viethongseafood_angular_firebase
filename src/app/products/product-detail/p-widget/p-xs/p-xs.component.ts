import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-p-xs',
  templateUrl: './p-xs.component.html',
  styleUrls: ['./p-xs.component.scss']
})
export class PXsComponent implements OnInit {

  @Input() public p_xs: any;

  public btn_title: any;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
