import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deepa Jaganthan';
}

/* let name= {
  full : 'Deepa',
  last : 'Jaganathan',
  printName : function() {
  console.log('name: ' + this.full +" "+ this.last);
  }
}
name.printName();
//call borrowing=> calling function from different object
let name2={
  full : 'Yojith',
  last : 'Madhan',
}
name.printName.call(name2);

console.log("Plant corn");
//setTimeout(function() {console.log("Water plant")}, 3000);

console.log("Add fertilizer"); *///


