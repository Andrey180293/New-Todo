import { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
const TaskField = ({ data, activeItem }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  if (data.length === 0) return "...";
  return (
    <div>
      {data[activeItem].arr.map((item, key) => {
        return (
          <div key={key}>
            <Checkbox
              checked={item.complete}
              onChange={(e) => handleChange(e)}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            {item.text}
          </div>
        );
      })}
    </div>
  );
};
export default TaskField;
