/* eslint-disable react/prop-types */
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList(props) {
  // console.log(props.contacts);

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
        <Link to={"/add"}>
          <button className="pageBtn  ui button blue">Add Contact</button>
        </Link>
      </div>
      {renderContactList}
    </div>
  );
}

export default ContactList;
