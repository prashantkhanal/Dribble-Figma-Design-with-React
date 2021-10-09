import {
  Typography,
  makeStyles,
  Container,
  Box,
  Grid,
} from "@material-ui/core";
import { Forum, GolfCourse, People, Search } from "@material-ui/icons";
import CardComp from "../components/CardComp";

const useStyles = makeStyles((theme) => ({
  visionHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: 25,
    fontFamily: "Poppins",
    textTransform: "capitalize",
  },
}));

const Vision = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box my={7}>
        <Typography className={classes.visionHeading}>We Can Shape</Typography>
        <Typography className={classes.visionHeading}>your Vision</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <CardComp
            subHeadingContent="The first tip is also the simplest one. Google is probably the first
            place you’ll go when doing research for a new piece of content,
            right? Probably"
            heading="Research"
            btn="Learn More"
            icon={<Search style={{ fontSize: "40px" }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComp
            subHeadingContent="The first tip is also the simplest one. Google is probably the first
            place you’ll go when doing research for a new piece of content,
            right? Probably"
            heading="Disuccion"
            btn="Learn More"
            icon={<Forum style={{ fontSize: "40px" }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComp
            subHeadingContent="The first tip is also the simplest one. Google is probably the first
            place you’ll go when doing research for a new piece of content,
            right? Probably"
            heading="Team"
            btn="Learn More"
            icon={<People style={{ fontSize: "40px" }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComp
            subHeadingContent="The first tip is also the simplest one. Google is probably the first
            place you’ll go when doing research for a new piece of content,
            right? Probably"
            heading="impletation"
            btn="Learn More"
            icon={<GolfCourse style={{ fontSize: "40px" }} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Vision;
