import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AddFile } from "../AddFile";
import { createDoc } from "../../../../utils/api";
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createNewDoc = () => {
    const data = "";
    createDoc(data);
    handleClose();
  };

  return (
    <div>
      <AddFile handleClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Start a new document</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createNewDoc}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
