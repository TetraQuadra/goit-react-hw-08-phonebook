import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delContactsThunk, getContactsThunk } from 'redux/contactsThunk';


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
    <ul>
      {filtered && filtered.map((contact) => (
        <li style={{ marginBottom: 16 }} key={contact.id}>
          <span>
            {contact.name} - {contact.number}
          </span>
          <button onClick={() => handleRemoveContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;