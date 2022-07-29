import { PokemonType } from './pokemon-types.enum';

export interface Pokemon {
    image: string,
    name: string;
    number: number;
    types: PokemonType[];
}

export function getPokemonNumber(pokemon: Pokemon): string {
    return leadingZero(pokemon.number);
}

function leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
        s = '0' + s;
    }

    return s;
}
