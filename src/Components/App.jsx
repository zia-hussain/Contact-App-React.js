import React, { useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import "./App.css";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
function App() {
  const [contacts, setContacts] = useState([]);
  const contactappHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts,contact])
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact contactappHandler={contactappHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
