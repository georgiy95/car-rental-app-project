import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Header = styled("header")({
  height: "40px",
  position: "fixed",
  borderBottom: "3px solid #ff6b0a",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  backgroundColor: "#1976d2",
  backdropFilter: "blur(10px)",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 15px 0px",
  transition: "var(--main-transition)",
  display: "flex",
  justifyContent: "center",
});

export const NavWrap = styled("nav")({
  paddingLeft: "16px",
  paddingRight: "16px",

  maxWidth: "1200px",
  width: "1200px",
  minWidth: "100px",
  height: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "20px",
});

export const NavList = styled("ul")({
  height: "100%",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
});

export const NavItem = styled("li")({
  height: "100%",
});

export const NavLinkStyled = styled(NavLink)({
  fontFamily: "Manrope",
  fontSize: "25px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textDecoration: "none",

  transition: "var(--main-transition)",
  "&:hover": {
    color: "#ff6b0a",
  },
  "&.active": {
    color: "#ff6b0a",
    cursor: "default",
  },
});

export const Logo = styled("h1")({
  minWidth: "120px",

  fontFamily: "Manrope",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
  color: "var(--primary-black-color)",
});
