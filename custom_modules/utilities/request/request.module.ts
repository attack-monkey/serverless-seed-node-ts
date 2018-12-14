const requestLib = require('request');
import { APIGatewayEvent } from 'aws-lambda';
import { ProjectConfigModel } from '../../models/project-config.model';
import { RequestModuleOptions, Method, Resource, RequestOptions } from '../../models/http.models';
import { config } from '../../../project.config';
import { getRequestOptions } from './get-request-options.function';

export function requestModule() {
    return innerRequestModule(
        requestLib, getRequestOptions
    );
};

export function innerRequestModule(requestLib, getRequestOptions) {
    return {
        request: (
            method: Method, resource: Resource, event: APIGatewayEvent, options?: RequestModuleOptions
        ) => runRequest(method, resource, event, config, options, requestLib, getRequestOptions)
    }
};

async function runRequest(
    method: Method, resource: Resource, event: APIGatewayEvent,
    config: ProjectConfigModel, options: RequestModuleOptions,
    requestLib, getRequestOptions
): Promise<any> {
    const requestOptions: RequestOptions = getRequestOptions(method, resource, event, config, options);
    if (!requestOptions) {
        console.error('Error thrown in request.module - Trying to get an item that has not been configured in config');
        throw { errorMessage: 'An internal error has occurred', statusCode: 500 };
    }
    return new Promise((resolve, reject) => {
        requestLib(requestOptions, (error: any, res: any, body: any) => {
            if (error) {
                console.error('Error thrown in requestModule: ', error);
                reject(error)
            } else  {
                resolve(res);
            }
        });
    });
}
