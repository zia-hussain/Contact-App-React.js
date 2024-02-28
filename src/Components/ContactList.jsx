/* eslint-disable react/prop-types */
import { useRef } from "react";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

function ContactList(props) {
  const inputElement = useRef("");
  const naviagte = useNavigate();

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts?.map((contact, uid) => {
    return (
      <ContactCard
        contact={contact}
        key={uid}
        clickHandler={deleteContactHandler}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div className="contactList ui celled list">
      <div className="contact">
        <div className="btnntitle">
          <h1>Contact List</h1>
          <button
            className="pageBtn  ui button blue"
            onClick={() => naviagte("/add")}
          >
            Add Contact
          </button>
        </div>
        <div className="ui search fullinput">
          <div className="ui icon input">
            <input
              ref={inputElement}
              type="text"
              placeholder="Search Contact"
              className="prompt"
              value={props.term}
              onChange={getSearchTerm}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      {renderContactList.length > 0 ? (
        renderContactList
      ) : (
        <h4>No Contact Availble</h4>
      )}
    </div>
  );
}

export default ContactList;
