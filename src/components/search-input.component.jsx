import React, { Component } from "react";

export const SearchInput = ({ handleChange, placeholder }) => {
  return (
    <input
      className="w-64 p-2 rounded-lg border"
      type="search"
      placeholder={placeholder}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    ></input>
  );
};
