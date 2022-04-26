import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../tabs/shared/services/comics.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // TODO: Crear y tipar el modelo de cómics
  comics: any;
  constructor(private comicService: ComicsService) { }

  async ionViewWillEnter() {
    this.comics = await this.comicService.getAllComics();
    console.log(this.comics);
    
  }


  getImagen(data) {
    let imagen = `${data.path}.${data.extension}`;
    return imagen;
  }
}
