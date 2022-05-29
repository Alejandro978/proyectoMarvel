import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { ComicsService } from '../tabs/shared/services/comics.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // TODO: Crear y tipar el modelo de cómics
  comics: any[] = [];
  offset = 0;
  textoBusqueda = null;
  loading: HTMLIonLoadingElement;

  constructor(private comicService: ComicsService,
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController) { }

  async ionViewWillEnter() {
    this.siguientes();
  }

  async mostrarLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando datos...',
    });
    await this.loading.present();
  }


  getImagen(data) {
    let imagen = `${data.path}.${data.extension}`;
    return imagen;
  }

  ocultarLoading() {
    this.loadingCtrl.dismiss();
  }

  onSearchChange(event) {
    this.textoBusqueda = event.detail.value !== '' ? event.detail.value : undefined;
    this.offset = 0;
    this.comics = [];
    this.siguientes();
  }

  siguientes(event?) {
    this.mostrarLoading();
    this.comicService.getAllComics(this.offset, this.textoBusqueda).subscribe((res: any) => {
      res.data.results.forEach(comic => {
        if (!!comic.description && !comic.thumbnail.path.includes('image_not_available')) {
          this.comics.push(comic);
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
