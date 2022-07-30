import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly http: HttpClient,
  ) { this.loadPokemons(); }
  async loadPokemons() {
    const req = await this.http.get<any>(`${environment.endpointUrls.BASE_URL}/pokemon/?limit=1000&offset=0`).toPromise();
    return console.log(req);
  }


}
