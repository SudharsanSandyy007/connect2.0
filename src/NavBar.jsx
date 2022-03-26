import {
  AccountBoxRounded,
  AccountCircle,
  Chat,
  ChatBubble,
  CoronavirusRounded,
  Group,
  Home,
  SentimentSatisfiedAlt,
  Storefront,
  StorefrontRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useStateValue } from "./StateProvider";

function NavBar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbarLeft__logo">
          CONNECT
          <SentimentSatisfiedAlt />
        </div>
      </div>

      <div className="navbar__middle">
        <Link to="/">
          <div className="navbarMiddle__option">
            <Home />
          </div>
        </Link>
        <Link to="/stores">
          <div className="navbarMiddle__option">
            <Storefront />
          </div>
        </Link>
        <Link to="/groupchat/">
          <div className="navbarMiddle__option">
            <Group />
          </div>
        </Link>
        <Link to="/chat">
          <div className="navbarMiddle__option">
            <Chat />
          </div>
        </Link>
        <div className="navbarMiddle__option">
          <CoronavirusRounded />
        </div>
      </div>

      <div className="navbar__right">
        <div className="navbarRight__option">
          <Avatar src={user.photoURL} />
          <h2>{user.displayName}</h2>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
