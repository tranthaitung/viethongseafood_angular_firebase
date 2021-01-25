import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-p-lg',
  templateUrl: './p-lg.component.html',
  styleUrls: ['./p-lg.component.scss']
})
export class PLgComponent implements OnInit {

  @Input() public p_lg: any;
  public btn_title: any;

   constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
