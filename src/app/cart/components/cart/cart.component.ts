import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
cartProducts: any[] = []
total:any = 0
allItems: any
@Output('ngModelChange') update = new EventEmitter();
constructor(private service:CartService, private route: Router){}
ngOnInit(): void{
this.getCartProducts()
}
getCartProducts(){
  if("cart" in localStorage){
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
  }
  this.getCartTotal()

}
addAmount(index:number){
  this.cartProducts[index].quantity++;
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  minsAmount(index:number){
    if(this.cartProducts[index].quantity > 0){
    this.cartProducts[index].quantity--;
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
   if(this.cartProducts[index].quantity == 0){
    this.delete(index)
   }
  }
 delete(index:number){
    this.cartProducts.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    alert("the product has been deleted")
 
    }
getCartTotal(){
this.total = 0
for(let x in this.cartProducts){
  this.total+= this.cartProducts[x].item.price * this.cartProducts[x].quantity;
}
}

addCart(order: any){
 
  this.service.clearCart();
  console.log(order)
  alert("Your Order Submitted")
  this.route.navigate(['/'])
}
}
