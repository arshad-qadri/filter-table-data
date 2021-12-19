import React from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";

const App = () => {
  // =====> Get variable name from url <========//
  // pass parameter ==> ?name="arshad"
  // const urlSearchParams = new URLSearchParams(window.location.search);
  // const params = Object.fromEntries(urlSearchParams.entries());
  return (
    <>
      <Header />
      <Table />
    </>
  );
};

export default App;
