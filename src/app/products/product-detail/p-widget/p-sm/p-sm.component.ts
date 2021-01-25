import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-p-sm',
  templateUrl: './p-sm.component.html',
  styleUrls: ['./p-sm.component.scss']
})
export class PSmComponent implements OnInit {

  @Input() public p_sm: any;
  public btn_title: any;

   constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
