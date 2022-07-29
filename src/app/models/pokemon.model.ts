import { PokemonType } from './pokemon-types.enum';

export interface Pokemon {
    image: string,
    name: string;
    number: number;
    types: PokemonType[];
}