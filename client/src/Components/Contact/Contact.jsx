import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contactMeContainer">
      <h2 className="contactTitle">Contact</h2>
      <label htmlFor="inputname"></label>
      <input
        type="text"
        placeholder="Your beautiful name"
        id="inputname"
        required
        name="inputname"
      />
      <label htmlFor="inputemail"></label>
      <input
        type="email"
        placeholder="Email"
        id="inputemail"
        required
        name="inputemail"
      />
      <label htmlFor="inputmessage"></label>
      <textarea
        type="text"
        placeholder="Your message"
        id="inputmessage"
        required
        name="inputmessage"
      />
      <button className ="contactButton"> Submit </button>
    </div>
  );
};

export default Contact;
