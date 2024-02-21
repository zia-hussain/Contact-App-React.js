import React, { useState } from "react";

function AddContact(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory");
      return;
    }

    // const existingContact = props.contacts.find(
    //   (contact) => contact.name === state.name || contact.email === state.email
    // );

    // if (existingContact) {
    //   alert("Contact with the same name or email already exists");
    //   return;
    // }

    props.contactappHandler(state);
    setState({ name: "", email: "" });
  };

  return (
    <div className="maindiv">
      <div className="mform ui main">
        <h2>Add Contact</h2>
        <form onSubmit={add} className="ui form">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              className="first-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setState({ ...state, name: e.target.value })}
              value={state.name}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
              value={state.email}
            />
          </div>
          <button type="submit" className="ui button blue">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
