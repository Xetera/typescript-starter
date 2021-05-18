# Typescript Starter

[![Actions Status](https://github.com/Xetera/typescript-starter/workflows/CI%20Checks/badge.svg)](https://github.com/xetera/typescript-starter/actions)

![banner](https://d2eip9sf3oo6c2.cloudfront.net/series/covers/000/000/052/full/EGH_Typescript_Plumbing_banner.png?1463413763)

Starter Node.js project that includes Typescript tooling I end up installing for most of my Node.js repos.

## Installation

1. `git clone https://github.com/xetera/typescript-starter project`
2. `cd project`
3. `yarn`
4. `cp .env.example .env`

## Included tooling

- Prettier
- Eslint
- Jest
- Fast Check
- TS Node
- Nodemon
- Docker
- Github Actions

## Dependencies

- Dotenv
- Winston

### Why ~~no~~ yarn

~~I don't think Yarn is relevant in 2019 anymore. I personally believe that the JS community is divided enough in its tooling already and we don't need even more fragmentation. Stick with npm.~~

Yarn allows for using workspaces which is very useful and more flexible than lerna. It's too good to pass up.

### Why no semicolons

Idk I think no semi looks nicer.

### Why no gulp/grunt

It's 2021
