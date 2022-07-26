// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnviromentConfig } from './environment.types';

export const environment: EnviromentConfig = {
  production: false,
  BASE_URL: 'http://localhost:3000',
  endpointUrls: {
    BASE_URL: 'https://pokeapi.co/api/v2',
    pokemon: '/pokemon/'
  },
};

