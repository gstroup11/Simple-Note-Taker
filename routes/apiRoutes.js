const router = require('express').Router();
const noteStorage = require('../db/noteStorage');

//GET route to retrieve all notes from the database
router.get('/notes', async (req, res) => {
    try {
      const notes = await noteStorage.getNotes();
      res.json(notes);
    } catch (error) {
      console.error('Error getting notes:', error);
      res.status(500).json({ error: 'Failed to retrieve notes' });
    }
  });

//POST route to add new notes
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
   
//DELETE route to delete a note by its id
router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
  
    noteStorage.deleteNote(id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((error) => {
        console.error('Error deleting note:', error);
        res.status(500).json({ error: 'Failed to delete note' });
      });
  });

 module.exports = router;