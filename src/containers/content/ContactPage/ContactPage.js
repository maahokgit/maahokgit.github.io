import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import Slide from "@material-ui/core/Slide";
import funko_avi from "../../../assets/img/funko_avi2.png";
import Style from "./ContactPage.module.css";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Let's Chat | Edward Ma, MStJ";
  }, []);

  const [validateEmail, setValidateEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

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
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJI_SERVICE_ID,
        process.env.REACT_APP_EMAILJI_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJI_USER_ID
      )
      .then(
        (result) => {
          if (result) {
            setFormSuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let formInput = (
    <>
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
    </>
  );
  return (
    <div className={Style.ContactPage}>
      <div className={Style.formContainer}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <form className={Style.ContactForm} onSubmit={sendEmail}>
            <h1>Let's Chat. Drop me a line!</h1>
            {formSuccess ? (
              <h3>
                Message Sent! Thank you! <br /> <br />I will get back to you as
                soon as I see it!
              </h3>
            ) : (
              formInput
            )}
          </form>
        </Slide>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <img src={funko_avi} alt="funko avi" />
        </Slide>
      </div>
    </div>
  );
};

export default ContactPage;
