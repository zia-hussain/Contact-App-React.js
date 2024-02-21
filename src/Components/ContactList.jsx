/* eslint-disable react/prop-types */
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  // console.log(props.contacts);

  const renderContactList = contacts?.map((contact) => {
    return <ContactCard contact={contact} key={contact} />;
  });

  return <div className="contactList ui celled list">{renderContactList}</div>;
}

export default ContactList;
