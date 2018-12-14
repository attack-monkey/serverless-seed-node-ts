import { HttpResponse, StatusCodes, APIError } from '../models/http.models';
import { config } from '../../project.config'
import { debug } from '../utilities/state-and-debug';

export function generateHTTPError(error: APIError): HttpResponse {
    const statusCode = error && error.statusCode ? error.statusCode : 500;
    const errorMessage = extractMessage(error);
    debug.log(`HTTP Error Response Code - : ${statusCode}: Message: ${errorMessage}`);
    return new HttpResponse(
        statusCode,
        config.returnHeaders,
        JSON.stringify({ message: errorMessage })
    );
};

function extractMessage(error: APIError): string {
    if (error.PassThrough && error.message) { return error.message; }
    switch (error.statusCode) {
        case 400:
            return 'Bad Request'; 
        case 401:
            return 'Unauthorized';
        case 404:
            return 'Resource not found';
        case 409:
            return 'Confict with existing resource';
        case 500:
            return 'An internal error has occurred';
        case 502:
            return 'Bad Gateway';
        default:
            return 'An internal error has occurred';
    }
};