const router = require('express').Router();
const noteStorage = require('../db/noteStorage');

router.get('/notes', async (req, res) => {
    try {
      const notes = await noteStorage.getNotes();
      res.json(notes);
    } catch (error) {
      console.error('Error getting notes:', error);
      res.status(500).json({ error: 'Failed to retrieve notes' });
    }
  });

 module.exports = router;