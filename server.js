const express = require('express');
// const apiRouter = require('./routes/apiRoutes.js');
const htmlRouter = require('./routes/htmlRoutes.js');

//inits app and port for app
const app = express();
const PORT = process.env.PORT || 3001;

//body parsing, static, and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api', apiRouter);
app.use('/', htmlRouter);

//Initializes express port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));