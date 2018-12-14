import { APIGatewayEvent, Callback, Handler, Context } from 'aws-lambda';
import { generateHTTPError } from '../../custom_modules/utilities/error-handler.function';

export async function helloFunction(event: APIGatewayEvent, cb: Callback): Promise<void> {
  try {
    const greeting = greet(event);
    return cb(undefined, greeting);
  } catch (error) {
    console.error('helloFunction: ', error);
    return cb(undefined, generateHTTPError(error));
  }
}

function greet(event: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
      input: event,
    }),
  };
};