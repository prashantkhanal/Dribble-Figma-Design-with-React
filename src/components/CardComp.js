import {
  Typography,
  makeStyles,
  Container,
  Card,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    padding: theme.spacing(2, 0),
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: 23,
    fontFamily: "Poppins",
  },
  subHeading: {
    padding: theme.spacing(0, 0, 3, 0),
    fontSize: 16,
  },
  cardBtn: {
    fontWeight: 900,
    textDecoration: "underline",
    paddingBottom: theme.spacing(2),
    cursor: "pointer",
    transform: "1s ease-in-out",
  },
  cardBox: {
    backgroundColor: "inherit",
    "&:hover, &:focus": {
      backgroundColor: "#FFFFFF",
      borderBottom: "4px solid #111",
      cursor: "pointer",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#FFFFFF",

      cursor: "pointer",
      boxShadow:
        "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);",
    },
  },
}));

const CardComp = ({ icon, heading, subHeadingContent, btn }) => {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.cardBox}>
      <Box px={3}>
        <Box style={{ color: "#111", fontSize: 40, paddingTop: 30 }}>
          {icon}
        </Box>
        <Typography className={classes.heading}>{heading}</Typography>
        <Typography className={classes.subHeading}>
          {subHeadingContent}
        </Typography>
        <Typography className={classes.cardBtn}>{btn}</Typography>
      </Box>
    </Card>
  );
};

export default CardComp;
