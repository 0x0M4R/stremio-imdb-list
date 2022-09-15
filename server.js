// require serverless version
const app = require('./index.js')

// create local server
app.listen(7512, function () {
    console.log('Addon active on port 7513.');
    console.log('http://127.0.0.1:7512/[imdb-list-id]/manifest.json');
});