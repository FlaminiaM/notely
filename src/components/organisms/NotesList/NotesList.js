import './NotesList.scss';

import Note from '../Note/Note';
import {notes} from '../../../data/notes';

function NotesList() {
  const orderedNotes = notes.sort(
    (p1, p2) => (p1.date < p2.date) ? 1 : (p1.date > p2.date) ? -1 : 0);
  
  return (
    <div className='notes-list'>
        {orderedNotes.map((note) => <Note key={note.id} {...note} />)}
    </div>
  )
}

export default NotesList;