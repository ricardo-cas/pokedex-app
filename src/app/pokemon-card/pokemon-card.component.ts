import { Component, Input, OnInit } from '@angular/core';
import { PokemonType } from '../models/pokemon-types.enum';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @Input('pokemon')
  public pokemon: Pokemon = {
    name: '',
    image: '',
    number: 0,
    types: [
      PokemonType.BUG
    ]
  };

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
