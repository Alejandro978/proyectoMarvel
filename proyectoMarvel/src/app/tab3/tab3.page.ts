import { Component, OnInit } from '@angular/core';
import { HistoriasService } from '../tabs/shared/services/historias.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // TODO: Crear y tipar el modelo de historias
  historias: any;


  constructor(private historiasService: HistoriasService) { }

  ionViewWillEnter() {
    this.getHistorias();
  }

  getHistorias() {
    this.historiasService.getAllHitorias().subscribe((res: any) => {
      this.historias = res.data.results;
      console.log(this.historias);
    });
  }

}
