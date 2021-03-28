import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AddTaskModal from "./AddTaskModal";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Sidebar({
  data,
  activeLink,
  setActive,
  setData,
  deleteDataItem,
}) {
  const classes = useStyles();
  if (data.length <= 0) return "00000";
  return (
    <>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
        style={{ backgroundColor: "#64b5f6" }}
      >
        {data &&
          data.map((el, key) => {
            let strikethrough = el.arr.every((item) => item.complete === true);
            return (
              <ListItem
                key={key}
                button
                style={{
                  backgroundColor: activeLink === key && "#1976d2",
                  textDecorationLine: strikethrough && "line-through",
                }}
                onClick={() => setActive(key)}
              >
                <Brightness1Icon
                  style={{ color: el.color, marginRight: "10px" }}
                />
                <ListItemText primary={el.name} />
                {activeLink === key && (
                  <DeleteForeverIcon
                    onClick={() => {
                      deleteDataItem(el.name);
                    }}
                  />
                )}
              </ListItem>
            );
          })}
      </List>

      <AddTaskModal setData={setData} data={data} />
    </>
  );
}
