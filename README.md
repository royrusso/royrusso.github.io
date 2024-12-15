# My Blog

This is my [personal website and blog](https://www.royrusso.com/). It is a place where I can share my thoughts, ideas, and projects with the world.

_This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator._

## Configuration - Local

https://docusaurus.io/docs/installation

## Local Development

`yarn run start`

http://localhost:3000/

If you want to run on a different port:

`yarn run start -- --port 3001`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build Static Files for Deployment

`yarn build` generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This site uses Github Actions to trigger deployment to Github Pages. The deployment script is located in `.github/workflows/deploy.yml`.

Docs can be found [here](https://docusaurus.io/docs/deployment#deploying-to-github-pages).

## Troubleshooting

- If you blow away your node_modules directory, you may need to reset things, so try this:

  ```
  yarn

  yarn build
  ```

- On initial install, you will need to `yarn install` to generate the `yarn.lock` file.
