import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroServiceService } from '../../services/hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _HeroService:HeroServiceService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this._HeroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0,3));
  }

}
