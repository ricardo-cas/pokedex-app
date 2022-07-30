export interface EnviromentConfig {
    BASE_URL: string,
    apiUrls?: ApiUrlConfig,
    production: boolean,
}

export interface ApiUrlConfig {
    endpoint: string,
}