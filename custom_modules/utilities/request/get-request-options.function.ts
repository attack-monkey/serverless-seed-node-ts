import { RequestModuleOptions, Resource, Method, RequestOptions } from "../../models/http.models";
import { ProjectConfigModel } from "../../models/project-config.model";
import { APIGatewayEvent } from "aws-lambda";

export function getRequestOptions(
    method: Method, resource: Resource, event: APIGatewayEvent, config: ProjectConfigModel, options?: RequestModuleOptions
): RequestOptions {
    // construct request options based on the resource
    const apiMap = config.restApis;
    return {
        method: method,
        url: options && options.params ?
            interpolate(apiMap[resource].service + apiMap[resource].endpoint, options.params) :
            apiMap[resource].service + apiMap[resource].endpoint,
        headers: apiMap[resource].requestHeaders ?
            options && options.params ?
                JSON.parse(interpolate(
                    JSON.stringify(apiMap[resource].requestHeaders),
                    options.params
                )) :
                apiMap[resource].requestHeaders :
            {}
    };
};

function interpolate(str: string, keyValMap: { [key: string]: string }) {
    return Object.keys(keyValMap).reduce((ac, cv) => {
        return ac.replace('{' + cv + '}', keyValMap[cv]);
    }, str);
};
