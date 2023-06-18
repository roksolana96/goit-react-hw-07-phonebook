import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'services/fetchApi';
import Loader from './Loader/Loader';
import { getLoader } from 'redux/Selectors';

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(getLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {loader && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          <Loader />        
      </div>
        )}
        <ContactList />
      </div>
    </>
  );
};

// export const App = () => {
//   return (
//     <>
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     </>
//   );
// };