import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ɵEMPTY_ARRAY } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FRUITS } from '../moke-fruits';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html'
})
export class RechercheComponent implements OnInit {
istrue : boolean = false;
dataStart : number = 0;
dat : boolean = false;
datacheck:[{id:number,name:string}]=[{id:20,name:""}];


  constructor() {
   }
   fruit= FRUITS;
  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
this.dataStart =1;
if(this.dataStart === 1){
  this.istrue = true;

}
  let bigFruits = FRUITS.filter(function (e) {
    return e.name.includes(form.value['search'].toLowerCase());
});


for(let i=0; i < bigFruits.length;i++ ) {
  
this.datacheck.push({ "id": bigFruits[i].id, "name": bigFruits[i].name });
}
form.reset()
}

}