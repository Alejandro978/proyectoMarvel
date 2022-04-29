import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  // Recupera toda la información de los comics
  async getAllComics() {
    const data: any = await this.http.get(`${URL}/comics?ts=1&apikey=${environment.publicKey}&hash=${environment.hash}&limit=50`).toPromise();
   console.log(data.data.results);
    return data.data.results;
  }
}
