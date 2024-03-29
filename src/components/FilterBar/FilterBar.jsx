import {
  Form,
  Input,
  InputRangeWrap,
  InputWrap,
  Label,
  LabelMileage,
} from "./FilterBar-styled";

import Select from "react-select";

import { ButtonText } from "../ButtonText/ButtonText";
import { BrandSelectArray, PriceSelectArray } from "./SelectArrays";
import { useState } from "react";

export const FilterBar = ({ setFilterParams, setPage }) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const handleMileageChange = (e) => {
    const { value, name } = e.target;
    if (value.length > 7) return;

    const formattedValue = value.replace(/\D/g, "");
    const numericValue = parseInt(formattedValue, 10);

    if (!isNaN(numericValue)) {
      if (name === "minMileage") setMinMileage(numericValue);
      if (name === "maxMileage") setMaxMileage(numericValue);
    } else {
      if (name === "minMileage") setMinMileage("");
      if (name === "maxMileage") setMaxMileage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setFilterParams({
      brand: brand.value,
      price: price.value,
      minMileage,
      maxMileage,
    });
  };

  const selectStyles = {
    placeholder: (styles) => ({
      ...styles,
      fontFamily: "Manrope",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      cursor: "pointer",
      color: "#ff6b0a",
    }),

    input: (styles) => ({
      ...styles,
      padding: "0px",
      margin: "0px",
      height: "48px",
    }),

    singleValue: (styles) => ({
      ...styles,
      padding: "0px",
      margin: "0px",
      height: "48px",

      display: "flex",
      justifyContent: "left",
      alignItems: "center",
    }),

    valueContainer: (styles) => ({
      ...styles,
      paddingLeft: "18px",
      padding: "0px",
      margin: "0px",
      height: "48px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
    }),

    container: (styles) => ({
      ...styles,
      fontFamily: "Manrope",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#ff6b0a",

      display: "flex",
      justifyContent: "left",
      alignItems: "center",
    }),

    indicatorsContainer: (styles) => ({
      ...styles,
      paddingRight: "18px",
    }),

    control: (styles) => ({
      ...styles,
      border: "none",
      outline: "none",
      boxShadow: "none",

      height: "48px",
      width: "100%",

      borderRadius: "14px",
      backgroundColor: "var(--secondary-grey-color)",
      cursor: "pointer",
    }),

    menu: (baseStyles) => ({
      ...baseStyles,
      overflow: "hidden",
      borderRadius: "14px",
      padding: "10px 0px",
    }),

    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      fontFamily: "Manrope",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      cursor: "pointer",
      padding: "4px 18px",
      color:
        isSelected || isFocused
          ? "#ff6b0a"
          : "rgba(18, 20, 23, 0.20)",
      backgroundColor: "var(--primary-white-color)",
    }),

    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "24px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        height: "66px",
        background: "rgba(18, 20, 23, 0.1);",
        borderRadius: "9999px",
        border: "8px solid rgba(0, 0, 0, 0)",
        backgroundClip: "padding-box",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "var(--accent-color)",
        borderRadius: "9999px",
        border: "8px solid rgba(0, 0, 0, 0)",
        backgroundClip: "padding-box",
      },
    }),
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputWrap sx={{ width: "224px" }}>
        <Label htmlFor="brand">Car brand</Label>
        <Select
          placeholder={"Enter the text"}
          maxMenuHeight={272}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            ...selectStyles,
            dropdownIndicator: (styles) => ({
              ...styles,
              padding: "0px",
              color: "#ff6b0a",
              transform: isBrandOpen ? "rotate(180deg)" : "rotate(0deg)",
            }),
          }}
          name="brand"
          inputId="brand"
          value={brand}
          onMenuOpen={() => setIsBrandOpen(true)}
          onMenuClose={() => setIsBrandOpen(false)}
          onChange={(selectedOption) => setBrand(selectedOption)}
          options={BrandSelectArray.map((brand) => ({
            value: brand,
            label: brand,
          }))}
        ></Select>
      </InputWrap>

      <InputWrap sx={{ width: "125px" }}>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <Select
          placeholder={"To $"}
          maxMenuHeight={188}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            ...selectStyles,
            dropdownIndicator: (styles) => ({
              ...styles,
              padding: "0px",
              color: "#ff6b0a",
              transform: isPriceOpen ? "rotate(180deg)" : "rotate(0deg)",
            }),
          }}
          name="price"
          inputId="price"
          value={price}
          onMenuOpen={() => setIsPriceOpen(true)}
          onMenuClose={() => setIsPriceOpen(false)}
          onChange={(selectedOption) => {
            const newLabel = `To ${selectedOption.label}$`;
            const newOptions = { value: selectedOption.value, label: newLabel };
            setPrice(newOptions);
          }}
          options={PriceSelectArray.map((price) => ({
            value: price,
            label: price,
          }))}
        ></Select>
      </InputWrap>

      <InputWrap>
        <Label htmlFor="minMileage">Сar mileage / km</Label>
        <InputRangeWrap>
          <div style={{ position: "relative" }}>
            <LabelMileage htmlFor="minMileage">From</LabelMileage>
            <Input
              sx={{
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                borderRight: "1px solid rgba(138, 138, 137, 0.20)",
                paddingLeft: "75px",
                paddingRight: "10px",
              }}
              value={minMileage.toLocaleString("en-US")}
              onChange={(e) => handleMileageChange(e)}
              type="text"
              name="minMileage"
              id="minMileage"
              min="0"
            />
          </div>

          <div style={{ position: "relative" }}>
            <LabelMileage htmlFor="maxMileage">To</LabelMileage>
            <Input
              sx={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderLeft: "1px solid rgba(138, 138, 137, 0.20)",
                paddingLeft: "50px",
                paddingRight: "10px",
              }}
              value={maxMileage.toLocaleString("en-US")}
              onChange={(e) => handleMileageChange(e)}
              type="text"
              name="maxMileage"
              id="maxMileage"
              min="0"
            />
          </div>
        </InputRangeWrap>
      </InputWrap>

      <ButtonText type={"submit"} sx={{ width: "136px", height: "48px" }}>
        Search
      </ButtonText>
    </Form>
  );
};
