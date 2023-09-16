import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delContactsThunk, getContactsThunk } from 'redux/contactsThunk';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filter.filtered);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(getContactsThunk(token));
  }, [dispatch, token]);

  const handleRemoveContact = (id) => {
    dispatch(delContactsThunk({ id, token }));
  };

  return (
    <>

      <ul className={styles.list}>
        {filtered && filtered.map((contact) => (
          <li className={styles.listItem} key={contact.id}>
            <span>
              {contact.name} - {contact.number}
            </span>
            <button className={styles.button} onClick={() => handleRemoveContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;