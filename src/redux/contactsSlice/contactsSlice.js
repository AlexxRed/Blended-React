import { createSlice } from "@reduxjs/toolkit";

const initialState = { contacts: [] };
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log(state.contacts);
      console.log(action);
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      console.log(action.payload);
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    toggleStatus: (state, action) => {
      const index = state.contacts.findIndex(({ id }) => id === action.payload);
      const status = state.contacts[index].status === "yes" ? "no" : "yes";
      state.contacts[index] = { ...state.contacts[index], status };
    },
  },
});

export const contactSliceReducers = contactsSlice.reducer;
export const { addContact, deleteContact, toggleStatus } =
  contactsSlice.actions;

export const getContacts = (state) => state.contacts;
