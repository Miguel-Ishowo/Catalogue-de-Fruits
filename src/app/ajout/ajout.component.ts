import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fruit } from '../fruit';
import { FRUITS } from '../moke-fruits';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  fruit = FRUITS;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {

    let nom = form.value['champ'].toLowerCase();
    if (nom != null) {
      const num = FRUITS.length + 1;
      FRUITS.push({ "id": num, "name": nom });
      form.reset();
    }
    else {
      alert('CHAMP VIDE !!')
    }

  }

 
  reloadPage() {
     window.location.reload();
  }
}
