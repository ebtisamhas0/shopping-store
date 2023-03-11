import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatIconModule,
        RouterModule,
        MatButtonModule
    ]
})
export class ProductsModule { }
