import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contactsThunk';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(state => state.contacts.contacts)
  const token = useSelector((state) => state.auth.token);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.find(
        contacts => contacts.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert('Contact already exists!');
    } else {
      dispatch(addContactsThunk({ contact, token }))
    }

  };

  return (
    <>
      <h1 className={styles.header}>Phonebook</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contact.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contact.number}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <button
          className={styles.button}
          type="submit"
        >
          Add Contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
