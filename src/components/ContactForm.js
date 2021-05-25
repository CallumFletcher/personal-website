import { Button } from "@material-ui/core";
import React from "react";
import emailjs from "emailjs-com";

const ContactForm = (props) => {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.send("service_1ldd0m6", "template_gaiqtd6", {
      from_name: "john",
      message: "hello there",
    });
  }
  return (
    <form onSubmit={sendEmail}>
      <Button type="submit">press me</Button>
    </form>
  );
};

export default ContactForm;
