import { useLocation } from "react-router-dom";
import user from "../assets/Images/userimg.jpg";

function ContactDetail() {
  const location = useLocation();
  console.log("Location", location.state.contact);
  return (
    <div className="detail main ">
      <div className="ui card center">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{location.state.contact?.name}</div>
          <div className="description">{location.state.contact?.email}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
