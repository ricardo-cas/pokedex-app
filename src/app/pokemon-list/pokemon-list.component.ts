import { Component, OnInit } from '@angular/core';
import { PokemonType } from '../models/pokemon-types.enum';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
  }
  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      name: 'Bullbasaur',
      number: 1,
      types: [
        PokemonType.GRASS,
        PokemonType.POISON
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      name: 'Ivysaur',
      number: 2,
      types: [
        PokemonType.GRASS,
        PokemonType.POISON
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      name: 'Venosaur',
      number: 3,
      types: [
        PokemonType.GRASS,
        PokemonType.POISON
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      name: 'Charmander',
      number: 4,
      types: [
        PokemonType.FIRE
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      name: 'Charmeleon',
      number: 5,
      types: [
        PokemonType.FIRE
      ]
    }
  ]
}
