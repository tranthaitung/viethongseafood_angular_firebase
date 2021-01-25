import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../../../products/shared/product.service';

import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Params } from '@angular/router';
import {Content} from '../../../models/content.model';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {
  private unsubscribe$ = new Subject();

  public metadata: any;
  public about: any;
  public aboutIntro:any;
  public mission:any;
  public vision:any;
  public corevalue:any;
  public market:any;
  public title:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.about = new Content();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.title = localStorage.getItem('about_');

    this.productService.getContent()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((metadata) => {
        this.metadata = <any[]>metadata;

        for (let data of this.metadata) {
          if(data['id'] == 'about')
          {
            for(var index of data['des']){
              if (index['id'] == 'intro') {
                this.aboutIntro = index;
                this.about = this.aboutIntro['des'];
              }
            }
          }
          else if (data['id'] == 'mission'){
            this.mission = data['mission'];
            this.vision = data['vision'];
          }
          else if (data['id'] == 'corevalue'){
            this.corevalue = data;
          }
          else if (data['id'] == 'market'){
            this.market = data;
          }
        }

      });

      //scroll

      this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.getElement();
      });
      
  }

  private getElement(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.onClick(id);
   
  }

  onClick(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }

}
