/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import userImg from "../assets/Images/user.png";

function ContactCard({ contact, clickHandler }) {
  // Ensure that 'contact' prop is defined before destructuring
  const { id, name, email } = contact || {};
  const navigate = useNavigate();

  return (
    <div className="item">
      <div className="content">
        <img className="ui avatar image" src={userImg} alt="" />
        <div
          onClick={() =>
            navigate(`/contact/${id}`, { state: { contact: contact } })
          }
          style={{ cursor: "pointer" }}
        >
          <div className="header">{name}</div>
          <div className="email">{email}</div>
        </div>
      </div>
      <div className="btns">
        <i
          style={{
            color: "Red",
            marginTop: "7px",
            cursor: "pointer",
            // marginLeft: "10px",
          }}
          className="trash alternate outline icon"
          onClick={() => clickHandler(id)}
        ></i>
        <i
          style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
          className="edit alternate outline icon"
          onClick={() => navigate("/edit", { state: { contact: contact } })}
        ></i>
      </div>
    </div>
  );
}

export default ContactCard;
