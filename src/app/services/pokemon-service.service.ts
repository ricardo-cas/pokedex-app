import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly http: HttpClient,
  ) {
    this.loadPokemons();
  }

  loadPokemons() {
    const req = this.http.get<any>(`${environment.endpointUrls.BASE_URL}${environment.endpointUrls.pokemon}`);
    return req;
  }

  getPokemonData(name: string) {
    return this.http.get<any>(`${environment.endpointUrls.BASE_URL}${environment.endpointUrls.pokemon}${name}`);
  }
}
