import { Injectable } from '@angular/core';
import { listHeroes } from '../data/dataHeroes';
import { Hero } from '../interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor(private _messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    //TODO: sent the message _after_ fetching the heroes
    this._messageService.add('HeroService: fetched heroes');
    return of(listHeroes);
  }

  getHero(id: number): Observable<Hero>{
    this._messageService.add(`HeroService: fetched hero id=${id}`)
    return of(listHeroes.find(hero => hero.id === id));
  }
}
