import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import SimilarTV from "../similarTV";
import TVReviews from "../tvReviews";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Credits from "../tvCredits";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const TVDetails = ({ TV }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
  
    <>
      
      <Typography variant="h5" component="h3">
        Overview 
      </Typography>
      {/* {TV.in_production ? <Chip label ={ `In Production`} icon = { <CheckCircleOutlineIcon/>} color = "primary"/>:
      <Chip label ={ `Ended on ${TV.last_air_date}`} icon = { <CancelIcon/>} color = "secondary"/>} */}

      <Typography variant="h6" component="p">
        {TV.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {TV.genre_ids.map((g) => (
          <li key={g}>
            <Chip label={g} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
      
        {/* <Chip icon={<AccessTimeIcon />} label={`${TV.episode_run_time} min.`} /> */}
        <Chip
          icon={<VisibilityIcon />}
          label={`${TV.popularity.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${TV.vote_average} (${TV.vote_count})`}
        />
        <Chip label={`First Aired In: ${TV.first_air_date}`} />
        {/* <Chip label={`Most Recent Air Date: ${TV.last_air_date}`} /> */}
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        {TV.origin_country.map((c) => (
          <li key={c._id}>
            <Chip label={`${c}`} sx={chip} />
          </li>
        ))}
      </Paper>
      <Divider style={{paddingTop: 20, paddingBottom: 20}}/>
      <Grid item display="flex"
    justifyContent="center"
    alignItems="center"> 
      <Credits TV={TV} />
      </Grid>
      <SimilarTV TV = {TV}/>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TVReviews TV = {TV}/>
      </Drawer>
    </>
  );
};

export default TVDetails ;