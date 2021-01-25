import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-p-md',
  templateUrl: './p-md.component.html',
  styleUrls: ['./p-md.component.scss']
})
export class PMdComponent implements OnInit {

  @Input() public p_md: any;
  public btn_title: any;

   constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.btn_title = this.productService.getButtonTitle();
  }

}
