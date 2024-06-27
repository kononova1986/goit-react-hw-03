import { useEffect, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import info from './info.json';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('new-contact');
    return savedContacts !== null ? JSON.parse(savedContacts) : []; // Setting info as default state
  });

  useEffect(() => {
    localStorage.setItem('new-contact', JSON.stringify(contacts));
  }, [contacts]);

  const onDelete = contactId => {
    setContacts(allContacts => {
      return allContacts.filter(contact => contact.id !== contactId);
    });
  };

  const addContacts = data => {
    setContacts(allContacts => {
      return [...allContacts, data];
    });
  };

  const [search, setSearch] = useState('');
  const visibleInfo = contacts.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContacts} />
      <SearchBox value={search} onSerch={setSearch} />
      <ContactList information={visibleInfo} onDelete={onDelete} />
    </div>
  );
}
