import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { EventosService } from '../tabs/shared/services/eventos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  // TODO: Crear y tipar el modelo de historias
  eventos: any[] = [];
  offset = 0;
  textoBusqueda = null;
  loading: HTMLIonLoadingElement;

  constructor(private eventosService: EventosService,
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController) { }

  async ionViewWillEnter() {
    this.siguientes();
  }

  getImagen(data) {
    let imagen = `${data.path}.${data.extension}`;
    return imagen;
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

  onSearchChange(event) {
    this.textoBusqueda = event.detail.value !== '' ? event.detail.value : undefined;
    this.offset = 0;
    this.eventos = [];
    this.siguientes();
  }

  siguientes(event?) {
    this.mostrarLoading();
    this.eventosService.getAllEventos(this.offset, this.textoBusqueda).subscribe((res: any) => {
      res.data.results.forEach(evento => {
        if (!!evento.description && !evento.thumbnail.path.includes('image_not_available')) {
          this.eventos.push(evento);
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
