import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from "../../services/hero-service.service";
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];


  constructor(private heroService:HeroServiceService) { }

  ngOnInit(): void {
  }

}
