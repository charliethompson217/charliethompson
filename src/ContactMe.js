import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [warning, setWarning] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kf6jtrt', 'template_v7jwypd', form.current, { publicKey: '6NZH6iulNjK-z6ENA', })
      .then(() => {
        setStatus("Email sent succesfuly");
        form.current.reset();
      }, (error) => {
        setWarning("Email failed to send");
      });
  };
  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your Email" />
        <label>Message</label>
        <textarea name="message" placeholder="Your Message" />
        <input type="submit" value="Send" />
        <p classname="warning">{warning}</p>
        <p>{status}</p>
      </form>
    </div>
  )

}
