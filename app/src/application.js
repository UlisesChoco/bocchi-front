const server = require('../../core/server');
const { controller } = require('./bocchi_controller');

server.start(8080, controller);