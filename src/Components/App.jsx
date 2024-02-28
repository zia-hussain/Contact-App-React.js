import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from "../api/contact";
import EditContact from "./EditContact";
import contact from "../api/contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Retrieve Contacts
  const retrieveContacts = async () => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      console.error("Error retrieving contacts:", error);
      return [];
    }
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContact = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContact);
    } else {
      setSearchResult(contact);
    }
  };

  const getAllContacts = async () => {
    const allContacts = await retrieveContacts();
    setContacts(allContacts);
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addcontactHandler={addContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetail />} />

          <Route
            path="/edit"
            element={<EditContact getAllContacts={getAllContacts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
