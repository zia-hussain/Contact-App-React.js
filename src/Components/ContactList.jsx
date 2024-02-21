import ContactCard from "./ContactCard";

function ContactList(props) {
  console.log(props.contacts);

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div className="contactList ui celled list">{renderContactList}</div>;
}

export default ContactList;
