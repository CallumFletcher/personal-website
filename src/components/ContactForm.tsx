import {
  Button,
  makeStyles,
  Snackbar,
  TextField,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "&$disabled $notchedOutline": {
      borderColor: "orange !important",
    },
  },
  input: {
    color: "#fff",
  },
  disabled: {},
  notchedOutline: {},
  specialOutline: {
    borderColor: "pink",
    borderWidth: 4,
  },
}));
const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ffb7f3",
    },
    "& label.Mui": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffb7f3",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        color: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#ffb7f3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffb7f3",
      },
    },
  },
})(TextField);

const ContactForm = (props) => {
  const classes = useStyles();
  const initialData = {
    from_name: "",
    message: "",
    from_contact: "",
  };
  const [data, setData] = useState(initialData);
  const [sendSuccess, setSendSuccess] = useState(false);
  async function sendEmail(e) {
    e.preventDefault();
    emailjs
      .send(
        "service_1ldd0m6",
        "template_gaiqtd6",
        data,
        "user_QzbFYc9s00FrJuK0l97fL"
      )
      .then((resp) => {
        setData(initialData);
        setSendSuccess(true);
      })
      .catch((e) => {
        alert("Something Went Wrong");
      });
    console.log(data);
  }
  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <>
      <form
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <StyledTextField
          style={{ color: "#fff", margin: 5 }}
          variant="outlined"
          fullWidth
          label="Name"
          name="from_name"
          value={data.from_name}
          onChange={handleChange}
          InputLabelProps={{
            className: classes.input,
          }}
          InputProps={{
            className: classes.input,
          }}
        />
        <StyledTextField
          style={{ color: "#fff", margin: 5 }}
          variant="outlined"
          fullWidth
          label="Email"
          name="from_contact"
          value={data.from_contact}
          onChange={handleChange}
          InputLabelProps={{
            className: classes.input,
          }}
          InputProps={{
            className: classes.input,
          }}
        />
        <StyledTextField
          style={{ color: "#fff", margin: 5 }}
          variant="outlined"
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={5}
          value={data.message}
          onChange={handleChange}
          InputLabelProps={{
            className: classes.input,
          }}
          InputProps={{
            className: classes.input,
          }}
        />

        <Button
          disabled={!data.from_name || !data.from_contact || !data.message}
          type="submit"
          variant="outlined"
          style={
            !data.from_name || !data.from_contact || !data.message
              ? {
                  color: "#ffb7f3",
                  borderColor: "#ffb7f3",
                  margin: 5,
                  opacity: 0.5,
                }
              : { color: "#ffb7f3", borderColor: "#ffb7f3", margin: 5 }
          }
        >
          Send Message
        </Button>
      </form>
      <Snackbar
        open={sendSuccess}
        autoHideDuration={5000}
        onClose={() => setSendSuccess(false)}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => setSendSuccess(false)}
          severity="success"
        >
          Message Sent Successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
