import emailjs from "emailjs-com";

const contactPage = () => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1>Contact Page</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="reply_to" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default contactPage;
