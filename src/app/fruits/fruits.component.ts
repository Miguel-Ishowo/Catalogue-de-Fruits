import { Component, OnInit } from '@angular/core';
import { FRUITS } from '../moke-fruits';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruit= FRUITS;

  constructor() { }

  ngOnInit(): void {
  }

compteur()
{
  let count = 0;
  for(var i = 0; i < FRUITS.length; ++i){
        count++;  
  }
   return count;
}
  

}
