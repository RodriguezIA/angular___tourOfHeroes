import { Component, OnInit, TypeProvider } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { listHeroes } from '../../data/dataHeroes';
import { HeroServiceService } from '../../services/hero-service.service';
import { MessageService } from 'src/app/services/message.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  h = listHeroes;
  heroes: Hero[];
  selectedHero:Hero;

  constructor(
    private hs: HeroServiceService, 
    private _messageService: MessageService,
    private _location:Location
    ) {
   }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  //funciones de HeroService
  getHeroes(): void{
    this.hs.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  //funcion goBack()
  goBack(){
    this._location.back();
  }

}
