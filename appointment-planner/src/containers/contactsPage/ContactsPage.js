import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({addContact, contacts}) => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isDuplicate) {
      addContact(name, phoneNumber, email)
      setName('');
      setPhoneNumber('');
      setEmail('');
    }

  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find(contact => contact.name === name);
      if(found) {
        return true
      } 
      return false
    }

    if(nameIsDuplicate()) {
      setIsDuplicate(true)
    } else {
      setIsDuplicate(false)
    }

  }, [name, contacts, isDuplicate])
  

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {isDuplicate ? '- Name Already Exists' : ''}
        </h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phoneNumber}
          setPhone={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
