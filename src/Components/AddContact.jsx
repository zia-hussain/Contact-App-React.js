import React  from "react";
class AddContact extends React.Component {
render(){
  return (
    <div className="maindiv">
    <div className="mform ui main">
      <h2>Add Contact</h2>
      <form action="" className="ui form">
        <div className="field">
          <label htmlFor="">Name</label>
          <input className="first-input" type="text" name="name" placeholder="Name"/>
        </div>
        <div className="field">
          <label htmlFor="">Email</label>
          <input type="email" name="Email" placeholder="Email"/>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
    </div>
  );

}
 
}


export default AddContact;
