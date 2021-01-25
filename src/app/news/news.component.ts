import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Schema } from '../../../data/demo-data';
import { ProductService } from '../products/shared/product.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  private unsubscribe$ = new Subject();

  // public dataList = demo_data;
  public news: any[];
  public title: any;
  public news_title: any;
  public btn_title: any;
  public schema: any;

  constructor(private productService: ProductService,) { }


  ngOnInit() {
    // this.news = Schema.news;
    this.title = localStorage.getItem('news');
    this.news_title = this.productService.getNewsTitle();
    this.btn_title = this.productService.getButtonTitle();

    this.productService.getNews()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((data) => {
      this.news = data;
    });
  }

  getLocalSchema(){
    this.schema = this.productService.getLocalSchema();
    
    let array = [];  
    for(let key in this.schema){  
     if(this.schema.hasOwnProperty(key)){  
       array.push(this.schema[key]);  
     }  
    }
    this.news = array;
  }

  setLanguage(lang: String) {

    let currentLang = localStorage.getItem('selectedLanguage');
    if (currentLang == lang) {
      return;
    }


    if (lang == 'en') {
      localStorage.setItem('selectedLanguage', 'en');
    } else if (lang == 'vn') {
      localStorage.setItem('selectedLanguage', 'vn');
    }

    this.schema = this.productService.getLocalSchema();
    
    let array = [];  
    for(let key in this.schema){  
     if(this.schema.hasOwnProperty(key)){  
       array.push(this.schema[key]);  
     }  
    }

    this.news = array;

    // if (lang == 'en') {
    //   this.navbar = this.navbar_en;
    // } else if (lang == 'vn') {
    //   this.navbar = this.navbar_vn;
    // }

    // localStorage.setItem('selectedLanguage', this.navbar['id']);
    // localStorage.setItem('about', this.navbar['about']);
    // localStorage.setItem('about_', this.navbar['about_']);
    // localStorage.setItem('products', this.navbar['products']);
    // localStorage.setItem('aquaculture', this.navbar['aquaculture']);
    // localStorage.setItem('news', this.navbar['news']);
    // localStorage.setItem('contact', this.navbar['contact']);
    // localStorage.setItem('recruitment', this.navbar['recruitment']);
    // localStorage.setItem('market', this.navbar['market']);


    // window.location.reload();
  }

}
