import {
  Accessibility,
  AccessibilityNew,
  Accessible,
  Bookmark,
  BookmarkAdded,
  CalendarMonthRounded,
  ConnectedTv,
  Coronavirus,
  CurrencyRupee,
  Group,
  Handshake,
  HandshakeOutlined,
  HandshakeSharp,
  Help,
  Home,
  Payment,
  Settings,
  Storefront,
  StorefrontRounded,
} from "@mui/icons-material";
import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__option">
        <Home style={{ color: "#ff0066" }} /> <b>Home</b>
      </div>
      <div className="sidebar__option">
        <Group style={{ color: "#ad33ff" }} /> <b>Groups</b>
      </div>
      <div className="sidebar__option">
        <Settings style={{ color: "#737373" }} /> <b>Settings</b>
      </div>
      <div className="sidebar__option">
        <BookmarkAdded style={{ color: "#33cc33" }} /> <b>Bookmarked/Saved</b>
      </div>
      <div className="sidebar__option">
        <Payment style={{ color: "#003366" }} /> <b>Connect Pay</b>
      </div>
      <div className="sidebar__option">
        <ConnectedTv style={{ color: "#ffa200" }} /> <b>Live</b>
      </div>
      <div className="sidebar__option">
        <CalendarMonthRounded style={{ color: "#1affff" }} /> <b>Events</b>
      </div>
      <div className="sidebar__option">
        <AccessibilityNew style={{ color: "#000000" }} /> <b>Help people</b>
      </div>
      <div className="sidebar__option">
        <Coronavirus style={{ color: "#00ff99" }} /> <b>Covid Tracker</b>
      </div>
      <div className="sidebar__option">
        <Storefront style={{ color: "#0044ff" }} /> <b>Connect Shops</b>
      </div>
    </div>
  );
}

export default SideBar;
