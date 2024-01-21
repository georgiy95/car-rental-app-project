import { styled } from "@mui/material/styles";

export const Form = styled("form")({
  marginBottom: "50px",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "18px",
  color: " #ff6b0a",
});

export const InputWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "74px",
  gap: "8px",
  justifyContent: "space-between",
});

export const InputRangeWrap = styled("div")({
  display: "flex",
});

export const Input = styled("input")({
  height: "48px",
  width: "100%",
  maxWidth: "160px",

  paddingTop: "10px",
  paddingBottom: "10px",

  border: "none",
  outline: "none",
  borderRadius: "14px",
  backgroundColor: "var(--secondary-grey-color)",
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
  color: " #ff6b0a",
});

export const Label = styled("label")({
  color: " #ff6b0a",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "18px",
});

export const LabelMileage = styled("label")({
  position: "absolute",
  left: "24px",
  top: "14px",
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
  color: "#ff6b0a",

  pointerEvents: "none",
});
