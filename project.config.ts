import { ProjectConfigModel } from "./custom_modules/models/project-config.model";

/*
 * DO NOT PUT ANY SECRETS IN THIS FILE
 * 
 */

export const config: ProjectConfigModel = {
    returnHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    },
    restApis: {}
};