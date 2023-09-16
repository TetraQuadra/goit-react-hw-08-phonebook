import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styles from './Filter.module.css'

export const Filter = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contacts.contacts);

    useEffect(() => {
        if (!input) {
            dispatch(setFilter(contacts))
            return
        }
        const filtered = contacts.filter(contact =>
            contact.name.toLowerCase().includes(input.toLowerCase())
        );
        dispatch(setFilter(filtered))
    }, [input, contacts, dispatch])

    return (

        <input
            className={styles.input}
            value={input}
            type="text"
            placeholder="Search by name"
            onChange={(e) => setInput(e.target.value)}
        />
    );
};


export default Filter;