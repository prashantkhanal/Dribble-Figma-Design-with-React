import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const bgImage =
  "https://cdn.pixabay.com/photo/2018/02/28/18/02/woman-pointing-3188559_960_720.jpg";

const useStyles = makeStyles((theme) => ({
  logo: {
    color: "#111",
    width: "13px",
    height: " 25px",
    background: " #FFFFFF",
    borderRadius: " 30px",
    fontWeight: 900,
    padding: "5px 12px",
    marginTop: theme.spacing(1.5),
  },
  logo2: {
    borderRadius: " 30px",
    fontWeight: 700,
    color: "#111",
    marginTop: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
    textTransform: "capitalize",
    fontSize: "20px",
    fontFamily: "Poppins",
  },

  backgroundCover: {
    backgroundImage: ` url(${bgImage})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "inherit",
    },
  },
  bannerBox: {
    marginTop: theme.spacing(20),
  },
  bannerButon: {
    background: "#111",
    color: "#ffffff",
    padding: "15 20",
    borderRadius: 20,
    fontFamily: "Poppins",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: "5px 7px",
      marginTop: theme.spacing(0),
    },
  },
  bannerButon2: {
    color: "#111",
    padding: "15 20",
    borderRadius: 20,
    fontFamily: "Poppins",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: "5px 7px",
      marginTop: theme.spacing(0),
    },
  },

  bannerHeading: {
    fontWeight: 500,
    textTransform: "capitalize",
    fontSize: 35,
    letterSpacing: "1px",
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  bannerSubHeading: {
    fontSize: "18px",
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  bannerSubHeadingBox: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 0),
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundCover}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Typography className={classes.logo}>P</Typography>
            <Typography className={classes.logo2}>prashant</Typography>
          </Box>
          <Box>
            <Menu
              fontSize="medium"
              style={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: "30px",
                marginTop: "12px",
              }}
            />
          </Box>
        </Box>
        <Box>
          <Box className={classes.bannerBox}>
            <Typography className={classes.bannerHeading}>
              We desing amazing
            </Typography>
            <Typography className={classes.bannerHeading}>
              experience for you
            </Typography>
            <Box className={classes.bannerSubHeadingBox}>
              <Typography className={classes.bannerSubHeading}>
                Template is a Professional Webflow template with
              </Typography>
              <Typography className={classes.bannerSubHeading}>
                with multiple sections
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              className={classes.bannerButon}
              disableElevation
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              className={classes.bannerButon2}
              disableElevation
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
