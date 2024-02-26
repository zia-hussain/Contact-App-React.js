/* eslint-disable react/prop-types */
import ContactCard from "./ContactCard";
import { Link, useNavigate } from "react-router-dom";
function ContactList(props) {
  // console.log(props.contacts);
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

  return (
    <div className="contactList ui celled list">
      <div className="contact">
        <h1>Contact List</h1>
        <button
          className="pageBtn  ui button blue"
          onClick={() => naviagte("/add")}
        >
          Add Contact
        </button>
      </div>
      {renderContactList}
    </div>
  );
}

export default ContactList;
