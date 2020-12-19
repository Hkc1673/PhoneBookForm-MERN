import React, {useState} from "react";
import axios from "axios";
import style from "../Style";

function PhoneBookForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
  
  const handleSubmit = (e) => {
  
   const body ={
     firstName: firstName,
     lastName: lastName,
     phone: phone
   }
   let sendData = () => {
    axios.post("api/user/addUser", body)
       .then(res => console.log('Data send'))
       .catch(err => console.log(err.data))
    }
    sendData();
  }
    return (
      <form style={style.form.container} onSubmit={handleSubmit}>
        <label>First name:</label>
        <br />
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          style={style.form.inputs}
          className="userFirstname"
          name="firstName"
          type="text"
          id="firstName"
          placeholder="Clarus"
          required
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          style={style.form.inputs}
          className="userLastname"
          name="lastName"
          id="lastname"
          type="text"
          placeholder="Way"
          required
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          style={style.form.inputs}
          className="userPhone"
          name="phone"
          id="phone"
          type="text"
          placeholder="0189654752"
          required
        />
        <br />
        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    );
  }

  export default PhoneBookForm;