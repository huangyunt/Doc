import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AddFile } from "../AddFile";
import { createDoc } from "../../../../utils/api";
import "./index.css";

export default function FormDialog({ setDocItems }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const createNewDoc = async () => {
    const res = await createDoc(title);
    console.log(res.docInfo);
    const { docToken, imgURL, createTime } = res.docInfo;
    setDocItems((oldItems) => [
      ...oldItems,
      {
        id: 0,
        token: docToken,
        title: "dfadfads",
        createTime,
        img: imgURL,
      },
    ]);
    handleClose();
  };
  return (
    <div>
      <AddFile handleClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={"create-doc-dialog"}>
          Start a new document
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event) => setTitle(event.target.value)}
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
