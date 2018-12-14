Serverless Seed Project ( _node_ + typescript )
========================

## Install

1. Fork the project
2. `npm install`
3. Globally install serverless (so you can use the serverless command in CLI) `npm install -g serverless`
4. Test that it's working by locally invoking (see below) and running the tests - `npm test`
5. Follow instructions for locally invoking serverless function

## Locally invoking a lambda (serverless function)

To locally invoke the serverless function...

```

npm run local

```

> This triggers the script called 'local', located in `package.json` scripts.  
> The script uses `serverless` to locally invoke the `hello` function in `serverless.yml` with the `hello.event.json`.
> `serverless.yml` calls `hello` in handler.ts.

## Run tests

Tests are run with mocha and chai.

```

npm test

```

> See a list of all scripts in `package.json` => scripts

