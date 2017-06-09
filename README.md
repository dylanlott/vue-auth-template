# vue-auth-template
a vue2 / vuex template with authentication and a feathers.js example api 

# Installation 
`$ npm install` in both the api and the vue directories. 

Then, run `$ npm run dev` in both directories to start up the server and the vue app, respectively. 

`$ npm run build` will build the vue app for production. 

## Mongo 

The feathers server will require a mongo instance running to work. 

If you use Docker, you can run:

`$ docker run --name mongo -p 27017:27017 -d mongo` 

and this will boot up a quick development mongo instance in one command.

# Vuetify

This template uses Vuetify, a component framework for VueJS. It's still very much in flux, so breaking changes are made pretty regularly
I'll try to keep up with it where possible, but you might have to adjust and change as updates go. 

# License 

MIT License 
