import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { HeroesService } from '../tabs/shared/services/heroes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // TODO: Crear y tipar el modelo de heróes
  heroes: any[] = [];
  offset = 0;
  textoBusqueda = null;
  loading: HTMLIonLoadingElement;
  constructor(private heroesService: HeroesService,
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.siguientes();
  }

  getImagen(data) {
    let imagen = `${data.path}.${data.extension}`;
    return imagen;
  }

  onSearchChange(event) {
    this.textoBusqueda = event.detail.value !== '' ? event.detail.value : undefined;
    this.offset = 0;
    this.heroes = [];
    this.siguientes();
  }


  async mostrarLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando datos...',
    });
    await this.loading.present();
  }

  ocultarLoading() {
    this.loadingCtrl.dismiss();
  }


  siguientes(event?) {
    this.mostrarLoading();
    this.heroesService.getAllHeroes(this.offset, this.textoBusqueda).subscribe((res: any) => {
      res.data.results.forEach(heroe => {
        if (!!heroe.description && !heroe.thumbnail.path.includes('image_not_available')) {
          this.heroes.push(heroe);
        }
      });

      this.offset = this.offset + 50;

      if (event) {
        event.target.complete();
        if (res.data.results.length === 0) {
          event.target.disabled = true;
        }
      }
      this.ocultarLoading();
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
