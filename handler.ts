import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { helloFunction } from './serverless-functions/hello/hello.function';
import { debug, setState } from './custom_modules/utilities/state-and-debug';
import { runningLocally } from './custom_modules/utilities/running-locally.module';

console.log('Lambda is starting cold...'); // Only logged on cold starts

export const hello: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  executeFunction(helloFunction, event, callback);
}

async function executeFunction(theFunction: (event: APIGatewayEvent, callback: Callback) => Promise<void>, event: APIGatewayEvent, callback: Callback) {
  // Debug logs can be set by environment variable `debug` in serverless.yml and in AWS Lambda console when live.

  process.env['debug'] ? debug.on() : debug.off();
  // ----------------------------------------------------------------
  if (runningLocally()) { debug.log('Running locally...'); }
  debug.log('Environment => ', process.env['environment'] + '...');
  // ----------------------------------------------------------------

  // set default state of the lambda function
  setState({});
  theFunction(event, callback);
}
