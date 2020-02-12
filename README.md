# Admock

Admock frontend web client.

## Development server

Run `npm start` for a dev server, application should open automatically in your browser at `http://127.0.0.1:5000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component ../components/component-name --module app` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build production

Run `npm run build:prod` to production build the project. The build artifacts will also be stored in the `dist/` directory and replace build located there.

## Deploy locally

Run `npm run deploy` to production build the project, build the Docker image, and deploy with Nginx in a Docker container hosted at `http://127.0.0.1:8080/`.

## Deploy production

Run `npm run deploy:prod` to production build the project, build and push the Docker image, and deploy the Docker container to Azure.

## Running unit tests

Run `npm test` to execute the unit tests.

## Linting

Run `npm run lint` to execute Sass linter and TypeScript linter.
