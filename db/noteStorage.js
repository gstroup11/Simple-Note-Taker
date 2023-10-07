const util = require('util');
const fs = require('fs');

const { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class noteStorage {
    readDb()  {
        return readFileAsync ('db/db.json', 'utf8');
    }

    writeDb(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    async getNotes() {
        try {
          const notes = await this.readDb();
          return JSON.parse(notes) || [];
        } catch (error) {
          console.error('Error getting notes:', error);
          return [];
        }
      }  

      async addNote(note) {
        const { title, text } = note;
      
        if (!title || !text) {
          throw new Error("Note 'title' and 'text' cannot be blank");
        }
      
        // Add a unique id to the note using uuid package
        const newNote = { title, text, id: uuidv1() };
      
        try {
          const notes = await this.getNotes();
          const updatedNotes = [...notes, newNote];
          await this.writeDb(updatedNotes);
          console.log('Note added successfully!');
          return newNote;
        } catch (error) {
          console.error('Error adding note:', error);
          throw error;
        }
      }

      async deleteNote(id) {
        try {
          const notes = await this.getNotes();
          const filteredNotes = notes.filter((note) => note.id !== id);
          await this.writeDb(filteredNotes);
          console.log('Note deleted successfully!');
        } catch (error) {
          console.error('Error deleting note:', error);
          throw error;
        }
      }
}

module.exports = new noteStorage();