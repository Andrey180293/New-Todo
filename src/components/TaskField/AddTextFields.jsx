import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default function AddTextFields({
  isActiveTextField,
  setActiveTextField,
  dataAactiveItem,
  setTextFieldItem,
}) {
  const [inputValue, onChangeInputValue] = useState("");
  const onChange = (e) => {
    onChangeInputValue(e.target.value);
  };

  const itemId = (arr) => {
    const arrId = [...arr.arr].map((el) => el.id);

    return arr.arr.length == 0 ? 0 : Math.max(...arrId) + 1;
  };

  const addTextField = (item, el) => {
    setTextFieldItem(item, el);
    setActiveTextField(false);
  };

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
        value={inputValue}
        onChange={(e) => onChange(e)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          addTextField(dataAactiveItem, {
            text: inputValue,
            complete: false,
            id: itemId(dataAactiveItem),
          })
        }
      >
        add
      </Button>
      <Button color="primary" onClick={() => setActiveTextField(false)}>
        close
      </Button>
    </div>
  );
}
