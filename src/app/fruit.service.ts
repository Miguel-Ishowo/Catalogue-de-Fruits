import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Fruit } from './fruit';
import { FRUITS } from './moke-fruits';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  addFruit(hero: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.fruitsUrl, hero, this.httpOptions).pipe(
      tap((newFruit: Fruit) => this.log(`added hero w/ id=${newFruit.id}`)),
      catchError(this.handleError<Fruit>('addFruit'))
    );
  }
}

