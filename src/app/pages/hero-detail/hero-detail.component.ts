import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/hero';
import { HeroServiceService } from '../../services/hero-service.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private _location:Location,
    private _activatedRoute: ActivatedRoute,
    private _heroService: HeroServiceService
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    this._heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void {
    this._heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this._location.back();
  }

}
