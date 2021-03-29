import { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import AddTextFields from "./AddTextFields";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
const TaskField = ({ data, activeItem, setCompleteItem }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (check, item) => {
    setChecked(check);
    setCompleteItem(check, item);
  };
  const [isActiveTextField, setActiveTextField] = useState(false);
  const [isActiveTextLink, setActiveTextLink] = useState(null);

  if (data.length === 0) return "...";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ marginTop: "0" }}>
        {data[activeItem] && data[activeItem].name}
      </h2>
      <div>
        {data[activeItem] &&
          data[activeItem].arr.map((item, key) => {
            return (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: isActiveTextLink === key && "#f44336",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTextLink(key)}
              >
                <Checkbox
                  checked={item.complete}
                  onChange={() => handleChange(!checked, data[activeItem].name)}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <p
                  style={{
                    width: "100%",
                    textDecorationLine: item.complete && "line-through",
                    textAlign: "left",
                  }}
                >
                  {item.text}
                </p>
                {isActiveTextLink === key && (
                  <CloseIcon style={{ float: "right" }} />
                )}
              </div>
            );
          })}
      </div>
      {!isActiveTextField ? (
        <Button
          color="primary"
          onClick={() => setActiveTextField(true)}
          style={{ float: "left" }}
        >
          {" "}
          Add Field
        </Button>
      ) : (
        <AddTextFields
          isActiveTextField={isActiveTextField}
          setActiveTextField={setActiveTextField}
        />
      )}
    </div>
  );
};
export default TaskField;
