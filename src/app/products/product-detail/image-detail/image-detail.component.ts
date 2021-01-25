import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  @Input() public imgUrl: any;
  constructor() { this.loadScripts();}

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
  }

}
