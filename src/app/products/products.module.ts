import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from '../shared/shared.module';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { RatingStarsComponent } from './shared/rating-stars/rating-stars.component';

import { FileUploadService } from './shared/file-upload.service';
import { ProductsCacheService } from './shared/products-cache.service';
import { ProductRatingService } from './shared/product-rating.service';

import { SortPipe } from './shared/sort.pipe';
import { PWidgetComponent } from './product-detail/p-widget/p-widget.component';
import { PLgComponent } from './product-detail/p-widget/p-lg/p-lg.component';
import { PMdComponent } from './product-detail/p-widget/p-md/p-md.component';
import { PSmComponent } from './product-detail/p-widget/p-sm/p-sm.component';
import { PXsComponent } from './product-detail/p-widget/p-xs/p-xs.component';
import { ProductBoxComponent } from './product-detail/p-widget/product-box/product-box.component';
import { ImageDetailComponent } from './product-detail/image-detail/image-detail.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsListComponent,
    ProductsListItemComponent,
    SortPipe,
    RatingStarsComponent,
    PWidgetComponent,
    PLgComponent,
    PMdComponent,
    PSmComponent,
    PXsComponent,
    ProductBoxComponent,
    ImageDetailComponent
  ],
  imports: [SharedModule],
  exports: [
    ProductDetailComponent,
    ProductsListComponent,
    ProductsListItemComponent,
    SortPipe,
    RatingStarsComponent
  ],
  providers: [SortPipe, FileUploadService, ProductsCacheService, ProductRatingService]
})
export class ProductsModule {}
