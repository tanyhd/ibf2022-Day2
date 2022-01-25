import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop2';

  inventoryListFruits: Array<string> = ["Apple", "Orange", "Pear", "Durian"];
  inventoryListFood: Array<string> = ["KFC", "Pizza Hut", "McDonalds", "Carl's Jr"];
}
