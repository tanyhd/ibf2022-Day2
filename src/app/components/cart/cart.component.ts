import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() inventoryList: any;

  cartMap = new Map<string, number>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(itemName: any) {
    if(this.cartMap.has(itemName)) {
      var temp = this.cartMap.get(itemName) as number;
      temp +=1;
      this.cartMap.set(itemName, temp);
      console.log("increase num " + this.cartMap.get(itemName))
    } else if (itemName !== ""){
      this.cartMap.set(itemName, 1);
      console.log("add new");
    }
    console.log(this.cartMap);
  }

  removeFromCart(item: string) {
    var temp = this.cartMap.get(item) as number;
    if(temp !== 0) {
      var newTemp = temp - 1;
      this.cartMap.set(item, newTemp);
      if(newTemp === 0) {
        this.cartMap.delete(item);
      }
    } else {
      this.cartMap.delete(item);
    }
    console.log(item);
  }

}
