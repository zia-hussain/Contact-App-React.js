import Header from "./Header";
import AddContact from "./AddContact";
import "./App.css";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
function App() {
  const contacts = [
    {
      id: "1",
      name: "Zia",
      email: "zia@gmail.com",
    },
    {
      id: "2",
      name: "Riyan",
      email: "riyan@gmail.com",
    }, {
      id: "3",
      name: "Aman",
      email: "aman@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
