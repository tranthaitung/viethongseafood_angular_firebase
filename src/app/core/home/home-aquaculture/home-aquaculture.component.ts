import { Component, OnInit, Input } from '@angular/core';
import  { Schema }  from '../../../../../data/demo-data';
import { ProductService } from '../../../products/shared/product.service';

@Component({
  selector: 'app-home-aquaculture',
  templateUrl: './home-aquaculture.component.html',
  styleUrls: ['./home-aquaculture.component.scss']
})
export class HomeAquacultureComponent implements OnInit {

  public btn_title: any;

  public aquaculte: any;
  @Input() public data: any;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.aquaculte = this.data;
    this.btn_title = this.productService.getButtonTitle();
  }

}
