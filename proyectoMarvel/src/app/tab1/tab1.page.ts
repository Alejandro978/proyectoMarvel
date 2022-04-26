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
  constructor(private heroesService: HeroesService) {
  }

  async ionViewWillEnter() {
    this.heroes = await this.heroesService.getAllHeroes();

  }

  getImagen(data) {
    let imagen = `${data.path}.${data.extension}`;
    return imagen;
  }

}
