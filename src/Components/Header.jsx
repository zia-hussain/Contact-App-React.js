import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/")}
      className="header ui fixed menu"
    >
      <div className="ui container">
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
}

export default Header;
