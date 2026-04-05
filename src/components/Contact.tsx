import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [isSent, setIsSent] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name !== "" && email !== "" && message !== "") {
      const formData = {
        name: name,
        email: email,
        message: message,
        // Enter your Web3Forms access key below
        access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE" 
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
            console.log("SUCCESS!", json);
            setIsSent(true);
          } else {
            console.log("FAILED...", json);
          }
        })
        .catch((error) => {
          console.log("ERROR...", error);
        });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  if (!e.target.value) {
                    setNameError(true);
                  } else {
                    setNameError(false);
                  }
                  setName(e.target.value);
                }}
                className="input"
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  if (!e.target.value) {
                    setEmailError(true);
                  } else {
                    setEmailError(false);
                  }
                  setEmail(e.target.value);
                }}
                className="input"
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                if (!e.target.value) {
                  setMessageError(true);
                } else {
                  setMessageError(false);
                }
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>
          <Snackbar
            open={isSent}
            autoHideDuration={6000}
            onClose={() => setIsSent(false)}
            message="Message sent successfully!"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
