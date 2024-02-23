/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import userImg from "../assets/Images/user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  const navigate = useNavigate();
  console.log(id);
  return (
    <div className="item" key={id}>
      <div className="content">
        <img className="ui avatar image" src={userImg} alt="" />
        <div
          onClick={() =>
            navigate(`/contact/${id}`, { state: { contact: props.contact } })
          }
          style={{ cursor: "pointer" }}
        >
          <div className="header">{name}</div>
          <div className="email">{email}</div>
        </div>
      </div>
      <i
        style={{ color: "Red", marginTop: "7px" }}
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}

export default ContactCard;
