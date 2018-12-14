import { helloFunction } from './hello.function';
import { assert } from 'chai';
import 'mocha';
import { APIGatewayEvent, Context } from 'aws-lambda';


describe('Hello function', () => {

  it('should callback with status of 200', (done) => {
    helloFunction({ httpMethod: 'GET' } as APIGatewayEvent, (error, response) => {
        assert.equal(200, response.statusCode);
        done();
      });
  });

  it('should callback with expected message of \'hello world\'', (done) => {
    helloFunction({ httpMethod: 'GET' } as APIGatewayEvent, (error, response) => {
        assert.equal('{"message":"hello world","input":{"httpMethod":"GET"}}', response.body);
        done();
      });
  });

});