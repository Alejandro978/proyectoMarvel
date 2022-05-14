import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  // Recupera toda la información de las historias
  getAllEventos(offset, textoBusqueda?) {

    return textoBusqueda === null || textoBusqueda === undefined ? this.http.get(`${URL}/events?ts=1&apikey=${environment.publicKey}&hash=${environment.hash}&limit=50&offset=${offset}`)
      : this.http.get(`${URL}/events?ts=1&apikey=${environment.publicKey}&hash=${environment.hash}&limit=50&offset=${offset}&nameStartsWith=${textoBusqueda}`);
  }
}
