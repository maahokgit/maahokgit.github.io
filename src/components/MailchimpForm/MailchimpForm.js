import MailchimpSubscribe from "react-mailchimp-subscribe";
import Style from "./MailchimpForm.module.css";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  console.log("[status] " + status);
  const thankYouDiv = <h1>Thank you!</h1>;
  const signUpDiv = (
    <>
      <p>Sign up and be the first to know when it's live!</p>
      {status === "error" ? (
        <p className={Style.error}> Please try another Email!</p>
      ) : null}
      <div className={Style.Form}>
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your Email"
        />
        <button onClick={submit}>Enter</button>
      </div>
    </>
  );
  return <>{status === "success" ? thankYouDiv : signUpDiv}</>;
};

const url = process.env.REACT_APP_MAILCHIMP_URL;

const MailchimpForm = () => (
  <div className={Style.EmailSignUp}>
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  </div>
);

export default MailchimpForm;
