'use client'

import * as React from 'react';
import { Box, Button, Typography, Modal, FormControl, FormLabel, TextField } from '@mui/material';
import { breakpointStyle } from "../utils/CommonStyles"

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
          <FormControl fullWidth>
            <FormLabel sx={{py: 2}}>
              Enter Email
            </FormLabel>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="your.email@domainname.extension"
            />
            <FormLabel sx={{py: 2}}>
              Enter Message
            </FormLabel>
            <TextField multiline={true} minRows="2"/>
            <Button variant="contained" sx={{mt: 3}}>Submit</Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}