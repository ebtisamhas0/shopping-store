import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from "./shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from'@angular/material/button';
@NgModule({
    declarations: [
        AppComponent,
      
      
                
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        CartModule,
        ProductsModule,
        MatIconModule,
        RouterModule,
        FormsModule,
        MatButtonModule,
        HttpClientModule
        
    ]
})
export class AppModule { }
