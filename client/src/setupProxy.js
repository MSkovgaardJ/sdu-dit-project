const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api/post/*', { target: 'http://localhost:8000' }))
    app.use(proxy('/api/user/*', { target: 'http://localhost:9000' }))
}