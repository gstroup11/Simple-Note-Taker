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

router.post('/notes', (req, res) => {
    const { title, text } = req.body;
  
    try {
      const newNote = noteStorage.addNote({ title, text });
      res.status(201).json(newNote);
    } catch (error) {
      console.error('Error adding note:', error);
      res.status(500).json({ error: 'Failed to add note' });
    }
  });
    

 module.exports = router;