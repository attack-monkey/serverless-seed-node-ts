import { PassThrough } from "stream";

export interface Headers {
    [key: string]: string | boolean
}

export type StatusCodes = 200 | 400 | 401 | 404 | 409 | 500 | 501 | 502;

export class HttpResponse {
    statusCode: StatusCodes;
    headers: Headers;
    body: any;
    constructor(statusCode: StatusCodes, headers: Headers, body: any) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
    }
}

export interface APIError {
    statusCode: StatusCodes,
    PassThrough?: boolean,
    message?: string
    extra?: any
}

export interface RequestModuleOptions {
    params?: any;
}

export interface RequestOptions {
    method: Method;
    url: string;
    headers: {
        [key: string]: string
    };
    body?: any
}

export interface ResponseModel {
    statusCode: number,
    headers: {
        [key: string]: string; 
    },
    body: any
}

export type Resource = ''   /* Add resource types here */;
export type Method = 'GET'  /* Add allowed methods here */;
