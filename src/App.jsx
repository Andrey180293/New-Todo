import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sidebar_Container from "./containers/Sidebar_Container";
import Task_Container from "./containers/Task_Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: "20px" }}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{ height: "90vh", backgroundColor: "#64b5f6" }}
          >
            <Sidebar_Container />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper
            className={classes.paper}
            style={{ height: "90vh", backgroundColor: "#e57373" }}
          >
            <Task_Container />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
