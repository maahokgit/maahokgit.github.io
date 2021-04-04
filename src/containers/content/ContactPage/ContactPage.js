import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

import Style from "./ContactPage.module.css";

const ContactPage = () => {
  useEffect(() => {
    console.log("[useEffect] - /contact");
    document.title = "Let's Chat - Edward Ma";
  }, []);
  
  const [validateEmail, setValidateEmail] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmailHandler = (event) => {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailReg.test(event.target.value)) {
      setValidateEmail(true);
      setMessage("");
    } else {
      setValidateEmail(false);
      setMessage("Please enter a valid email");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJI_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJI_TEMPLATE_ID,
    //     e.target,
    //     process.env.REACT_APP_EMAILJI_USER_ID
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className={Style.ContactPage}>
      <h1>Let's Chat!</h1>
      <p>
        Fill out this contact form, and I will get back to you as soon as
        possible.
      </p>
      <form className={Style.ContactForm} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" placeholder="Your Name" />
        <label>Email</label>
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          onChange={(e) => validateEmailHandler(e)}
        />
        {message !== "" ? <span>{message}</span> : null}
        <label>Message</label>
        <textarea name="message" placeholder="How can I help?" />
        <button disabled={!validateEmail}>Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
