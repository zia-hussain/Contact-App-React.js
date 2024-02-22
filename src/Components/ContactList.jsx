/* eslint-disable react/prop-types */
import ContactCard from "./ContactCard";

function ContactList(props) {
  // console.log(props.contacts);

  const deleteContactHandler = (id) => {
    props.getContactId(id)
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

  return <div className="contactList ui celled list">{renderContactList}</div>;
}

export default ContactList;
