export interface ProjectConfigModel {
    returnHeaders: {
        'Access-Control-Allow-Origin': string,
        'Access-Control-Allow-Credentials': boolean
    }
    restApis: {
        [resource: string]: {
            service: string,
            endpoint: string,
            requestHeaders: {
                [key: string] : string | boolean
            } 
        }
    }
}