import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../tabs/shared/services/heroes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // TODO: Crear y tipar el modelo de heróes
  heroes: any;
  constructor(private heroesService: HeroesService) { }

  ionViewWillEnter() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getAllHeroes().subscribe((res: any) => {
      this.heroes = res.data.results
      console.log(this.heroes);
    });
  }
}
