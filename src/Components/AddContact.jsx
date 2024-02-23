import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact(props) {
  const navigate = useNavigate();
  // const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    props.addcontactHandler(state);
    setState({ name: "", email: "" });
    // history.push("/");
    navigate("/");
  };

  return (
    <div className="maindiv">
      <div className="mform ui main">
        <h2>Add Contact</h2>
        <form onSubmit={add} className="ui form">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              className="first-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setState({ ...state, name: e.target.value })}
              value={state.name}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
              value={state.email}
            />
          </div>
          {/* <Link to={""}> */}
          <button type="submit" className="ui button blue">
            Add
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default AddContact;
