import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export default function AddTaskModal({ setData, data }) {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("#9a0036");
  const [activeButton, setActiveColorButton] = React.useState(0);
  const [inputValue, OnchangeInputValue] = React.useState("");

  const setColorItem = (num) => {
    setActiveColorButton(num);
    if (num === 0) setColor("#9a0036");
    if (num === 1) setColor("#d32f2f");
    if (num === 2) setColor("#388e3c");
    if (num === 3) setColor("#115293");
    if (num === 4) setColor("#f57c00");
  };

  const Onchange = (e) => {
    OnchangeInputValue(e.target.value);
  };

  const addData = (item) => {
    setOpen(false);
    setData(item);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Add Task
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#9a0036",
              height: "35px",
              opacity: activeButton === 0 && 0.6,
            }}
            onClick={() => setColorItem(0)}
          ></Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#d32f2f",
              height: "35px",
              opacity: activeButton === 1 && 0.6,
            }}
            onClick={() => setColorItem(1)}
          ></Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#388e3c",
              height: "35px",
              opacity: activeButton === 2 && 0.6,
            }}
            onClick={() => setColorItem(2)}
          ></Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#115293",
              height: "35px",
              opacity: activeButton === 3 && 0.6,
            }}
            onClick={() => setColorItem(3)}
          ></Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f57c00",
              height: "35px",
              opacity: activeButton === 4 && 0.6,
            }}
            onClick={() => setColorItem(4)}
          ></Button>
        </div>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add your task please"
            type="text"
            value={inputValue}
            onChange={(e) => {
              Onchange(e);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              addData({
                text: inputValue,
                color: color,
                count: data.length + 1,
              });
            }}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
