# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Configuration - Local

https://docusaurus.io/docs/installation

## Local Development

`yarn run start`

http://localhost:3000/

If you want to run on a different port:

`yarn run start -- --port 3001`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build Static Files for Deployment

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

## Troubleshooting

If you blow away your node_modules directory, you may need to reset things, so try this:

```
yarn

yarn build
```
