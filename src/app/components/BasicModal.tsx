'use client'

import * as React from 'react';
import { Box, Button, Typography, Modal, FormControl, FormLabel, TextField, Alert } from '@mui/material';
import { breakpointStyle } from "../utils/CommonStyles"
import emailjs from '@emailjs/browser';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const formReference = React.useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = formReference.current;
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return;

    if (process.env.EMAILJS_SERVICE_ID == null) {
      console.log("EMAILJS_SERVICE_ID not set")
      return;
    };
    if (process.env.EMAILJS_TEMPLATE_ID == null) {
      console.log("EMAILJS_TEMPLATE_ID not set")
      return;
    };
    if (process.env.EMAILJS_PUBLIC_KEY == null) {
      console.log("EMAILJS_PUBLIC_KEY not set")
      return;
    };

    emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, formReference.current, process.env.EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
  };

  const formStyle = {py: 1.2};

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{breakpointStyle}}>Reach Out</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{lineHeight: "2em"}}>
            Notify me of an opportunity <br/> I will get back to you as soon as possible 
          </Typography>
          <form onSubmit={sendEmail} ref={formReference}>
            <FormControl fullWidth >
              <FormLabel sx={formStyle}>
                Name
              </FormLabel>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  name="user_name"
                />
              <FormLabel sx={formStyle}>
                Enter Email
              </FormLabel>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  name="user_email"
                />
              <FormLabel sx={formStyle}>
                Enter Message
              </FormLabel>
                <TextField multiline={true} minRows="2" name="message"/>
              <Button variant="contained" sx={{mt: 3}} type="submit" value="Send" onClick={handleClose}>Submit</Button>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </div>
  );
}