import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import React, { useState } from "react";
import clsx from "clsx";
import {
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(152,218,218,0.75 ) 70%, #98dae4 100%);',
    boxShadow: 'none',
  },
  toolbar: {
    minHeight: "75px",
  },
  menuButton: {
    display: "none",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      right: 0,
    },
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  titleLogo: {
    marginTop: '20%',
    [theme.breakpoints.down("sm")]: {
      margin: '0 0 0 10px',
      float: 'left',
    }
  },
  navbarLink: {
    padding: "40px 25px",
    textTransform: "uppercase",
    color: 'white',
    fontWeight: 600
  },
  display: {
    padding: '5px'
  },
  activeLink: {
    borderBottom: '3px solid #fe5c05',
    padding: '5px',
    borderRadius: '5%'
  },
  landingDogImg: {

  }
}));

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contactus",
  },
];


export default function Header(props) {
  const classes = useStyles();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  // test item
  const activePage = 0
  const goToPage = (e) => {
    e.preventDefault();
    const pageValue = e.target.attributes[2].value;
  };
  const handleOpenSideMenu = () => {
    setOpenSideMenu(true);
  };
  const test = (e) => console.log();

  return (
    <>
      <div className={classes.root} onScroll={test}>
        <AppBar position="fixed" className={clsx(classes.appBar, {})}>
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item xs={8} md={2}>
                <img
                  className={classes.titleLogo}
                  src="https://ik.imagekit.io/2hpnhufyfob/logo_zLFD2j-8cZvj.png"
                  alt="logo img"
                />
              </Grid>
              <Hidden smDown>
                <Grid item xs={4} md={10}>
                  <Grid container justify="flex-end">
                    {
                    pages.map((page, i) => {
                      const activePageClass = (activePage === i) ? classes.activeLink : classes.display;
                      return (
                        <Link
                          className={classes.navbarLink}
                          href={page.path}
                          value={i}
                          onClick={goToPage}
                        >
                          <Typography className={activePageClass} variant="subtitle2">
                            {page.name}
                          </Typography>
                        </Link>
                      );
                    })}
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
            {/* Invisible Open Sidebar View */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleOpenSideMenu}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
