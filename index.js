const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api')

const app = express();

require('./database')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRouter);

// Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});