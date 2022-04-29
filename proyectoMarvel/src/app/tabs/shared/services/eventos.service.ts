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
  async getAllEventos() {
    const data: any = await this.http.get(`${URL}/events?ts=1&apikey=${environment.publicKey}&hash=${environment.hash}&limit=50`).toPromise();
    console.log(data.data.results);
    return data.data.results;
  }
}
