const timestamp = require('./controller.js');

module.exports = (app) => {

    app.get('/api/timestamp/:time', timestamp.timestamp)
    app.get('/api/timestamp/', timestamp.datenow)
}