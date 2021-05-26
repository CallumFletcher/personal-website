import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = (props) => {
  const [data, setData] = useState({
    from_name: "",
    message: "",
    from_contact: "",
  });
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    // emailjs.send(
    //   "service_1ldd0m6",
    //   "template_gaiqtd6",
    //   data,
    //   "user_QzbFYc9s00FrJuK0l97fL"
    // );
    console.log(data);
  }
  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <form onSubmit={sendEmail}>
      <TextField
        fullWidth
        label="Name"
        name="from_name"
        value={data.from_name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Contact Info (Optional)"
        name="from_contact"
        value={data.from_contact}
        onChange={handleChange}
      />
      <TextField
        style={{ color: "#fff", borderColor: "white" }}
        variant="outlined"
        fullWidth
        multiline
        row={5}
        label="Message"
        name="message"
        value={data.message}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
