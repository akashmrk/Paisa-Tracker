import React from "react";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={11} sm={4}>
          <Details title={"Income"} />
        </Grid>
        <Grid item xs={11} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={11} sm={4}>
          <Details title={"Expense"} />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
