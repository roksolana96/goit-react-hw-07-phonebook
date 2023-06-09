export const getContacts = state => state.contacts.contacts;

export const getFilteredUser = state => {
  const filterValue = state.filter.filterValue;
  if (typeof filterValue !== 'string') {
    return '';
  }
  return filterValue;
};