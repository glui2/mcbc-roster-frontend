import React from "react";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Box from "@material-ui/core/Box";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{
          boxShadow: "none",
          padding: "0px",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleDrawerOpen}
            data-testid="menuIcon"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          {[
            {
              label: "HOME",
            },
            {
              label: "PROFILE",
            },
            {
              label: "AVAILABILITIES",
            },
            {
              label: "ROSTER",
            },
            {
              label: "MEMBERS",
            },
          ].map((button, index) => (
            <Box m={2} key={index}>
              <Button variant="outlined" color="primary" fullWidth>
                {button.label}
              </Button>
            </Box>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
