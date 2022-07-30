export interface EnviromentConfig {
    BASE_URL: string,
    endpointUrls: ApiUrlConfig,
    production: boolean,
}

export interface ApiUrlConfig {
    BASE_URL: string,
    pokemon: string,

}