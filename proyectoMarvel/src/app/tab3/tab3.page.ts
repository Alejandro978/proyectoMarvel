import { Component, OnInit } from '@angular/core';
import { EventosService } from '../tabs/shared/services/eventos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  // TODO: Crear y tipar el modelo de historias
  eventos: any;

  constructor(private eventosService: EventosService) { }

  async ionViewWillEnter() {
    this.eventos = await this.eventosService.getAllEventos();
    console.log(this.eventos);
    
  }

  getImagen(data) {
    let imagen = `${data.path}.${data.extension}`;
    return imagen;
  }

}
