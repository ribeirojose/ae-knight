# Contributing 

# Table of Contents

This application was based on [AEboilerplate](https://github.com/agencyenterprise/aeboilerplate), a full-stack React/Node/Typescript web project starter that focuses primarily on ease-of-use and simplicity. Most of what is described here is simply an adaptation of what was already described in the original boilerplate docs. 

- [Structure](#tructure)
- [Development](#development)
- [Available scripts](#available-scripts)
- [Configuration](#configuration)
  - [Deployment](#deployment)
    - [Setting up your Heroku application](#setting-up-your-heroku-application)
    - [Deploying to Heroku](#deploying-to-heroku)
  - [Continuous integration](#continuous-integration)
    - [Setting up continuous integration with Circle CI and Heroku](#setting-up-continuous-integration-with-circle-ci-and-heroku)
- [Testing](#testing)

# Structure

The boilerplate is divided into two independent applications - the client and API. As the boilerplate is _not_ a monolithic application, the client and API can be separated into their own repositories.

The client application is generated using `create-react-app` and the API is built on top of Node and Express with a Postgres database.

Both applications come preconfigured with Docker and Docker Compose for running the applications locally in self-contained environments.

Here is a basic overview of the structure and technologies used:

- Client
  - Generated using [create-react-app](https://github.com/facebook/create-react-app) with [Typescript](https://www.typescriptlang.org/docs/home.html) and [SASS](https://sass-lang.com/).
  - [Axios](https://github.com/axios/axios) for the HTTP client.
  - [Redux](https://github.com/reduxjs/redux) using the [ducks modular approach](https://github.com/erikras/ducks-modular-redux) for state management.
  - [React Router 4](https://reacttraining.com/react-router/core/guides/philosophy) for routing. \* [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.
- API
  - [Express](https://expressjs.com/) for routing.
  - [Postgres](https://www.postgresql.org/about/) database and [Knex](https://knexjs.org/) for query building. [Migrations](https://knexjs.org/#Migrations-CLI) and [seeds](https://knexjs.org/#Seeds-CLI) are included. \* [Jest](https://jestjs.io/) for testing.
- [Circle CI configuration](https://circleci.com/docs/2.0/configuration-reference/#section=configuration) for continuous integration.
- [Docker](https://docs.docker.com) and [docker compose](https://docs.docker.com/compose/) for running applications locally.
- [prettier](https://github.com/prettier/prettier), [editorconfig](https://editorconfig.org/), and [tslint](https://palantir.github.io/tslint/) for consistent code formatting.
- [Github templates](https://blog.github.com/2016-02-17-issue-and-pull-request-templates/) for Github pull request templates.

# Development

The boilerplate comes packaged with a docker-compose file preconfigured for hot-reloading.

```shell
npm run dev
```

Running the command above in the root directory starts Docker-ized instances of the client, API, and database.

# Available scripts

To see all available npm scripts, run:

```shell
npm run
```

# Configuration

The API and client configuration files share the same structure and can be found in their respective `/src/config` folders. In a development environment, values are referenced inside the docker-compose configuration files.

## Deployment

The boilerplate can be deployed in any cloud service provider of your choice. For simplicity and ease-of-use, we use Heroku as our cloud service.

### Setting up your Heroku application

Prerequisites:

- [Heroku cli](https://www.npmjs.com/package/heroku)
- [Heroku](https://www.heroku.com/) account
- This boilerplate relies on an authentication process to work properly. Make sure you have been through the [authentication configuration](#authentication).

1. In your project directory, run `heroku login` and enter your credentials.
2. Run `heroku create APP_NAME` to create your Heroku application. Copy your application URL for later steps.
3. Navigate to your application in the [heroku apps dashboard](https://dashboard.heroku.com/apps) and go to the Resources tab. Under Add-ons, add a [postgres](https://elements.heroku.com/addons/heroku-postgresql) database by searching for postgres in the search field. A `DATABASE_URL` [configuration variable](https://devcenter.heroku.com/articles/config-vars) is generated upon creation.

### Deploying to Heroku

Deploy your application to Heroku by running:

```shell
git push heroku master
```

## Continuous integration

The boilerplate uses CircleCI for automated deployment to Heroku when pushing to your Github master branch.

# Testing

The boilerplate comes with tests for both the API and client. We highly encourage you to maintain them during development.

You can find API tests in the `api/spec` folder and the client tests inside each React components folder.

**To run client-side tests,**

```shell
npm run client-test
```

**To run server-side tests,**

```shell
npm run api-test-watch
```
