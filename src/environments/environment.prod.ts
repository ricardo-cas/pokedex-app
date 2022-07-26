import { EnviromentConfig } from './environment.types';

export const environment: EnviromentConfig = {
  production: true,
  BASE_URL: 'https://pokeapi.co/api/v2',
  endpointUrls: {
    BASE_URL: 'https://pokeapi.co/api/v2',
    pokemon: '/pokemon/'
  },
};
