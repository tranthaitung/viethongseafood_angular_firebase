import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../products/shared/product.service';
import { Params } from '@angular/router';
import { Schema } from '../../../../data/demo-data';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  private unsubscribe$ = new Subject();
  public newsLoading: boolean;
  public news: any;
  public _news: any[];
  public prevArticle: any;
  public nextArticle: any;
  public recentPosts: any[];
  public id_: any;
  public title:any;
  public btn_title:any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {

    this.title = localStorage.getItem('news');
    this.btn_title = this.productService.getButtonTitle();

    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.getNews();
      });

    this.productService.getNews()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.recentPosts = data;
        this._news = data;
      });

    // this.recentPosts = Schema.news;
  }

  private getNews(): void {
    this.newsLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.id_ = id;

    // this.productService.getNews()
    // .pipe(takeUntil(this.unsubscribe$))
    // .subscribe((data) => {
    //   this._news = data;
    // });

    // if ( this._news == null){
    //   return;
    // }



    // if (this.news == null){
    //   this.router.navigate(['/404-product-not-found']);
    // }

    this.newsLoading = false;

    // this.prevArticle = Schema.news[1];
    // this.nextArticle = Schema.news[2];

    this.productService
      .getNewsbyId(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        if (data) {
          this.news = data;
          this.newsLoading = false;
        } else {
          this.router.navigate(['/404-product-not-found']);
        }
      });
  }

}
