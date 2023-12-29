import './NotesList.scss';
import { connect } from "react-redux";

import Note from '../Note/Note';
import { setNoteFormState, deleteNote } from '../../../redux/reducers/notesReducers';

function NotesList({notes, setNoteFormState, deleteNote}) {
  const notesList = [...notes];
  const sortFunction = (p1, p2) => {
    const p1Date = new Date(p1.date);
    const p2Date = new Date(p2.date);
    return (p1Date < p2Date) ? 1 : ((p1Date > p2Date) ? -1 : 0);
    
  }
  notesList.sort(
    (p1, p2) => sortFunction(p1, p2));
  
  const editNoteHandler = (e) => {
    const noteId = e.target.closest('.note').getAttribute("note-id");
    setNoteFormState({
      isNotesFormOpen: true,
      isEditState: true,
      editNoteId: noteId
    })
  }

  const deleteNoteHandler = (e) => {
    const noteId = e.target.closest('.note').getAttribute("note-id");
    deleteNote(noteId);
  }

  return (
    <div className='notes-list'>
        {notesList.map((note) => <Note key={note.id} {...note} editNoteHandler={editNoteHandler} deleteNoteHandler={deleteNoteHandler} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNoteFormState: (obj) => dispatch(setNoteFormState(obj)),
    deleteNote: (obj) => dispatch(deleteNote(obj))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotesList);