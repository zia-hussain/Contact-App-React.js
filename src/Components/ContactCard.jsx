/* eslint-disable react/prop-types */
import userImg from "../assets/Images/user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item" key={id}>
      <div className="content">
        <img className="ui avatar image" src={userImg} alt="" />
        <div>
          <div className="header">{name}</div>
          <div>{email}</div>
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
