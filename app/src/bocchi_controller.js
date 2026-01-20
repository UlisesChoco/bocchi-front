const { controller } = require('../../core/controller');
const { load_html } = require('../../core/file_reader');
const bocchi_service = require('./bocchi_service');

controller.get('/', async (request, response) => {
    load_html(
        response,
        'index.html'
    );
});

controller.get('/season-one', async (request, response) => {
    const data = await bocchi_service.fetch_data('season-one');
    load_html(
        response,
        'info.html',
        [ 
            { key: "data", value: JSON.stringify(data) }
        ]
    );
});

controller.get('/season-two', async (request, response) => {
    const data = await bocchi_service.fetch_data('season-two');
    load_html(
        response,
        'info.html',
        [ 
            { key: "data", value: JSON.stringify(data) }
        ]
    );
});

controller.get('/special-episode', async (request, response) => {
    const data = await bocchi_service.fetch_data('special-episode');
    load_html(
        response,
        'info.html',
        [
            { key: "data", value: JSON.stringify(data) }
        ]
    );
});

controller.get('/movie', async (request, response) => {
    const data = await bocchi_service.fetch_data('movie');
    load_html(
        response,
        'info.html',
        [
            { key: "data", value: JSON.stringify(data) }
        ]
    );
});

exports.controller = controller;