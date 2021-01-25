import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Schema } from '../../../data/demo-data';
import { ImgUrl } from '../models/imgUrl.model';
import { ProductService } from '../products/shared/product.service';

@Component({
  selector: 'app-aquaculture',
  templateUrl: './aquaculture.component.html',
  styleUrls: ['./aquaculture.component.scss']
})
export class AquacultureComponent implements OnInit {

  private unsubscribe$ = new Subject();
  private process = Schema.processing;
  public processing: any;
  public metadata: any;
  public aquacutule: any;
  public navbar: any;
  public title: any;
  public certificated: any;
  public certificatedImgUrl: any;
  public imageFeatureUrl: any;
  public processingImgUrl: ImgUrl[];

  constructor(private productService: ProductService) { this.loadScripts() }

  loadScripts() {

    // This array contains all the files/CDNs 
    const dynamicScripts = [
      'assets/js/swiper-gallery.js'
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
    //this.processing = this.process;
    this.title = localStorage.getItem('aquaculture');

    var imgUrl_ = Array(4);

    for (var i = 0; i < 4; i++) {
      imgUrl_[i] = "";
    }
    this.processingImgUrl = imgUrl_;

    this.productService.getContent()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((metadata) => {
        this.metadata = <any[]>metadata;

        for (let data of this.metadata) {
          if (data['id'] == 'aquacutule') {
            for (var index of data['des']) {
              if (index['id'] != 'intro') {
                this.aquacutule = index['des'];
              }
            }
          }
          else if (data['id'] == 'processing') {
            this.processing = data;
            var imgUrls = data['imgUrls'];
            var item = 0;
            var loop = 0;
            while (item < 4) {
              if (loop >= imgUrls.length) {
                loop = 0;
              }

              imgUrl_[item] = imgUrls[loop];
              item++;
              loop++;
            }

            this.processingImgUrl = imgUrl_;

          }
          else if (data['id'] == 'certificated') {
            this.certificated = data['des'][0];
          }
        }

      });

    this.productService.getImageFeatureUrl()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.imageFeatureUrl = <any[]>data[0];
        this.certificatedImgUrl = this.imageFeatureUrl["certificated"];
      });
  }

}
