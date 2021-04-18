import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import Slide from "@material-ui/core/Slide";
import funko_avi from "../../../assets/img/fbavie.jpg";
import Style from "./ContactPage.module.css";
import { Button, Grid, TextField } from "@material-ui/core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../../components/UI/Spinner/Spinner";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Let's Chat | Edward Ma, MStJ";
  }, []);

  const [validateEmail, setValidateEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [sending, setSending] = useState(false);

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
    setSending(true);
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
            setSending(false);
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
      <TextField
        id="standard-basic"
        label="Your Name"
        margin="normal"
        type="text"
        name="from_name"
      />
      <TextField
        id="standard-basic"
        label="Your Email"
        margin="normal"
        type="email"
        name="from_name"
        helperText={message}
        onChange={(e) => validateEmailHandler(e)}
      />
      <TextField
        id="standard-multiline-static"
        name="message"
        label="Your Message"
        margin="normal"
        multiline
      />
      <Button
        className={Style.button}
        type="submit"
        size="large"
        disabled={!validateEmail}
        endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
      >
        Submit
      </Button>
    </>
  );
  return (
    <Grid container spacing={5} className={Style.formContainer}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Grid item md={5} xs={12}>
          <img src={funko_avi} alt="funko avi" />
        </Grid>
      </Slide>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Grid item md={7} xs={12}>
          <h4>
            I’m always keeping an eye out for opportunities and collaborations!
          </h4>
          <h4>Drop me a line if you’d like to chat.</h4>
          <form className={Style.ContactForm} onSubmit={sendEmail}>
            {sending ? (
              <Spinner />
            ) : formSuccess ? (
              <h3>
                Message Sent! Thank you! <br /> <br />I will get back to you as
                soon as I see it!
              </h3>
            ) : (
              formInput
            )}
          </form>
        </Grid>
      </Slide>
    </Grid>
  );
};

export default ContactPage;
