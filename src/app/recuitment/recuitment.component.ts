import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../products/shared/product.service';

@Component({
  selector: 'app-recuitment',
  templateUrl: './recuitment.component.html',
  styleUrls: ['./recuitment.component.scss']
})
export class RecuitmentComponent implements OnInit {

  private unsubscribe$ = new Subject();
  
  public metadata: any;
  public about: any;
  public title:any;
  public imgUrl:any;

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {

    this.title = localStorage.getItem('recruitment');
    this.imgUrl = "assets/img/tuyendung.jpg";

    this.productService.getContent()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((metadata) => {
        this.metadata = <any[]>metadata;

        for (let data of this.metadata) {
          if(data['id'] == 'recruitment')
          {
            for(var index of data['des']){
              if (index['id'] == 'intro') {
                this.about = index;
                if(this.about['imgUrl'] !== null)
                {
                  this.imgUrl = this.about['imgUrl'];
                }
              }
            }
          }
        }

      });
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

}

