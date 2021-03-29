import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default function AddTextFields({
  isActiveTextField,
  setActiveTextField,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        style={{ width: "75%" }}
      />
      <Button variant="contained" color="primary">
        add
      </Button>
      <Button color="primary" onClick={() => setActiveTextField(false)}>
        close
      </Button>
    </div>
  );
}
