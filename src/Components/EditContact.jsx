/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/contact";

function EditContact({ getAllContacts }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state || {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (contact) {
      setEmail(contact.email);
      setName(contact.name);
    }
  }, []);

  const clearState = () => {
    setName("");
    setEmail("");
  };
  const updatecontactHandler = async (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }

    const request = {
      id: contact.id,
      name,
      email,
    };
    const response = await api.put(`/contacts/${request.id}`, request);
    console.log("Response", response);
    if (response.statusText === "OK") {
      clearState();
      getAllContacts();
      navigate("/");
    }
  };

  return (
    <div className="maindiv">
      <div className="mform ui main">
        <h2>Edit Contact</h2>
        <form className="ui form">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              className="first-input"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="ui button blue"
            onClick={updatecontactHandler}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
