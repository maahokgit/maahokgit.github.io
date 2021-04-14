import { Grid } from "@material-ui/core";

const ContactMe = () => (
  <>
    <Grid container spacing={5} style={{ marginTop: 150 }}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h4>
          I’m always keeping an eye out for opportunities and collaborations!
        </h4>
        <h4>
          <a href="/contact">Drop me a line</a> if you’d like to chat.
        </h4>
      </Grid>
    </Grid>
  </>
);

export default ContactMe;
