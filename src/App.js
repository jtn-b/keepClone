import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CreateNote from "./components/CreateNote";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});



export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <CreateNote/>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}