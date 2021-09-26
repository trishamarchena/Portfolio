import { send } from "emailjs-com";
import { useState } from "react";
import React from "react";
import "./Contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_wc646qj",
      "template_u5xga8e",
      toSend,
      "user_9GPXvwXdItUpwaCBE1LQD"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contactMeContainer">
      <h2 className="contactTitle">Connect with me :) </h2>
      <form className="contactForm"
      onSubmit={onSubmit}>
        <input
          id="inputname"
          type="text"
          name="from_name"
          placeholder="From 'your beautiful name'"
          value={toSend.from_name}
          required
          onChange={handleChange}
        />

        <input
          id="inputemail"
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          required
          onChange={handleChange}
        />
        <textarea
          id="inputmessage"
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          required
          onChange={handleChange}
        />
        <button type="Submit" className="contactButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
