import React from "react";
import { ProductsContainer } from "./Products";

const Providers = [
  // each provider has access to the subsequent ones
  ProductsContainer.Provider,
];

const DataProvider = ({ children }: { children: JSX.Element }) =>
  Providers.reduce((A, Provider) => <Provider>{A}</Provider>, children);

export default DataProvider;
