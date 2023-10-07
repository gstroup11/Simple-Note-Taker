const util = require('util');
const fs = require('fs');

// const uuidv1 = require('uuid/v1');

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
}

module.exports = new noteStorage();