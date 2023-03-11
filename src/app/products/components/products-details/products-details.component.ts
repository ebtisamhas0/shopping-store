import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  
 
  id:any
  item!:Product 
  constructor(private service:ProductsService, private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get("id")
  }
ngOnInit(): void{
  this.getProductDetails()
}
  getProductDetails(){
    this.service.getProductById(this.id).subscribe((res:any) => {
      this.item = res
    }, (error: any) => {
      console.log(error)
    })
  }
 
}
