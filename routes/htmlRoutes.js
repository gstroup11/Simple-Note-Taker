const router = require('express').Router();
const path = require('path');

// GET  route to direct to the notes endpoint.
router.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//GET route to be directed to the main page.
router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;