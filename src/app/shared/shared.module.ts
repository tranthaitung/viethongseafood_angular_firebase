import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { PriceComponent } from './price/price.component';
import { PageTitleComponent } from '../core/page-title/page-title.component';
import { CertificatedComponent } from '../core/certificated/certificated.component';
import { ProductBoxDataComponent } from '../core/product-box-data/product-box-data.component';

@NgModule({
    declarations: [
        PriceComponent,
        PageTitleComponent,
        CertificatedComponent,
        ProductBoxDataComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [
        PriceComponent,
        PageTitleComponent,
        CertificatedComponent,
        ProductBoxDataComponent,
        CommonModule,
        AppRoutingModule,
        FormsModule
    ]
})
export class SharedModule {}
