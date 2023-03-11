import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
products:Product[] = []
categories:string[] = []
loading: boolean = false
cartProducts:any[]=[]
constructor(private service:ProductsService){}
ngOnInit(): void{
  this.getProducts()
  this.getCategories()
}
getProducts(){
  this.service.getAllProducts().subscribe((res:any) => {
    this.loading = true
    this.products = res
    this.loading = false
  }, error => {
    this.loading = false
    console.log(error)
  })
}
getCategories(){
  this.service.getAllCategories().subscribe((res:any) => {
    this.loading = true
    this.categories = res
    this.loading = false
    console.log(res)
  }, error => {
    this.loading = false
    console.log(error)
  })
}
filterCategory(event:any){
let value = event.target.value;
if(value == "all"){
  this.getProducts()
}else{
this.getProductsCategory(value)
}}
getProductsCategory(keyword:string){
  this.loading = true
  this.service.getProductByCategory(keyword).subscribe((res:any) =>{
    this.loading = false
    this.products = res
    
  })
}
addToCart(event:any){
  if("cart" in localStorage){
this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
let exist = this.cartProducts.find(item => item.item.id == event.item.id)
if(exist){
  alert("the product is already exist in your cart")
}else{
this.cartProducts.push(event)
localStorage.setItem("cart", JSON.stringify(this.cartProducts)) 
alert("the product has been added to the cart")
}}
else{
  this.cartProducts.push(event)
localStorage.setItem("cart", JSON.stringify(this.cartProducts)) 
}
}
}
