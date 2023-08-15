import { Box, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import Soldier from './soldier'

const DialogMador = () => {
  return (
    <Box>
         <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
            <Soldier/>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
    </Box>
  )
}

export default DialogMador