import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: JSON.parse(window.localStorage.getItem("notes")) || [],
  noteForm: {
    isNotesFormOpen: false,
    isEditState: false,
    editNoteId: ""
  }
  
};

const notesReducers = createSlice({
  name: "notes",
  
  initialState,
  
  reducers: {
    addNotes: (state, action) => {
      const newState = {
        ...state,
        notes: [...state.notes, action.payload]
      }
      window.localStorage.setItem("notes", JSON.stringify(newState.notes))
      return newState;
    },
    editNotes: (state, action) => {
      const newState = {
        ...state, 
        notes: state.notes.map((note) => {
          if(note.id === action.payload.id){
            return {
              ...note,
              title: action.payload.title,
              category: action.payload.category,
              description: action.payload.description,
              date: action.payload.date
            }
          }
          return note;
        })
      }
      window.localStorage.setItem("notes", JSON.stringify(newState.notes))
      return newState;
    },
    deleteNote: (state, action) => {
      const newState = {
        ...state,
        notes: state.notes.filter(note => note.id !== parseInt(action.payload))
      }
      window.localStorage.setItem("notes", JSON.stringify(newState.notes))
      return newState;
    },
    completeNote: (state, action) => {
      console.log("REDUCER: complete note")
      const newState = {
        ...state, 
        notes: state.notes.map((note) => {
          if(note.id === parseInt(action.payload)){
            return {
              ...note,
              complete: !note.complete,
            }
          }
          return note;
        })
      }
      window.localStorage.setItem("notes", JSON.stringify(newState.notes))
      return newState;
    },
    setNoteFormState: (state, action) => {
      return {
        ...state,
        noteForm: {...action.payload}
      }
    }
  },
  
});

export const { addNotes, editNotes, deleteNote, completeNote, setNoteFormState } = notesReducers.actions;
export const notesReducer = notesReducers.reducer;