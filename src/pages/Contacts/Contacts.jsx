import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import React from 'react'

function Contacts() {
    return (
        <main>
            <ContactForm />
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter />
            <ContactList />
        </main>
    )
}

export default Contacts