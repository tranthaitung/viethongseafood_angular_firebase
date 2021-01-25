import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImgUrl } from '../../models/imgUrl.model';
import { ProductService } from '../../products/shared/product.service';


@Component({
  selector: 'app-certificated',
  templateUrl: './certificated.component.html',
  styleUrls: ['./certificated.component.scss']
})
export class CertificatedComponent implements OnInit {
  // @Input() public certificatedImgUrl: any[];
  private unsubscribe$ = new Subject();
  public imageFeatureUrl: any;
  public certificatedImgUrl: any;
  public metadata: any;
  public certificated:any;

  constructor( private productService: ProductService,) { 
    this.loadScripts(); 
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
       'assets/js/swiper.js'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
 } 

  ngOnInit() {
    this.certificatedImgUrl = new ImgUrl();
    var p = new Array(8);
    for (var i = 0; i < p.length; i++) {
      p[i] = new ImgUrl();
    }
    this.certificatedImgUrl = p;

    this.productService.getContent()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((metadata) => {
      this.metadata = <any[]>metadata;

      for (let data of this.metadata) {
        // if (data['id'] == 'certificated') {
        //   this.certificated = data['des'][0];
        //   this.certificatedImgUrl = this.imageFeatureUrl["certificated"];
        // }

        if (data['id'] == 'certificated') {
          for (var index of data['des']) {
              var certificated = index['imgUrl'];
              var item = 0;
              var loop = 0;
              while (item < 8) {
                if (loop >= certificated.length) {
                  loop = 0;
                }
    
                p[item] = certificated[loop];
                item++;
                loop++;
              }
    
              this.certificatedImgUrl = p;
          }
        }
      }


    });

    // this.productService.getImageFeatureUrl()
    // .pipe(takeUntil(this.unsubscribe$))
    // .subscribe((data) => {
    //   this.imageFeatureUrl = <any[]>data[0];

    //   this.certificatedImgUrl = this.imageFeatureUrl["certificated"];
    // });
  }





}
