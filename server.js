const express = require('express');


//inits app and port for app
const app = express();
const PORT = process.env.PORT || 3001;

//body parsing, static, and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//Initializes express port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));