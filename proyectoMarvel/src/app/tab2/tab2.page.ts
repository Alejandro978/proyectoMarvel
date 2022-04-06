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

  ionViewWillEnter() {
    this.getComics();
  }

  getComics() {
    this.comicService.getAllComics().subscribe((res: any) => {
      this.comics = res.data.results;
      console.log(this.comics);
    });
  }

}
