import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts} from 'services/fetchApi';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const userReducer = contactSlice.reducer;





// const initialState = {
//   contacts: [],
// };

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, { payload }) => {
//       state.contacts.push(payload);
//     },
//     deleteContact: (state, { payload }) => {
//       state.contacts = state.contacts.filter(item => item.id !== payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactSlice.actions;
// export const userReducer = contactSlice.reducer;