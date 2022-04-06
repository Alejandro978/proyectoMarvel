import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  //Recupera toda la información de los héroes
  getAllHeroes() {
    return this.http.get(`${URL}/characters?ts=1&apikey=${environment.publicKey}&hash=${environment.hash}&limit=100`);
  }

}
