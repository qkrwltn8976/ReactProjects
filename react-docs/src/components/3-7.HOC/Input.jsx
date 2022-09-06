import React from "react";
import withLoading from "./withLoading";

function Input() {
  return <input defaultValue="Input"></input>;
}

export default withLoading(Input);
