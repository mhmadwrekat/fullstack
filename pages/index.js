import React, { useState, useEffect } from "react";
import Nav from "../component/Nav";
import Home from "../component/Home";
import fetch from "isomorphic-unfetch";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const index = ({ notes }) => {
  return (
    <React.Fragment>
      <Nav create={true} />
      <Home notes={notes} />
    </React.Fragment>
  );
};
index.getInitialProps = async () => {
  const resp = await fetch(`${API_URL}`);
  const { data } = await resp.json();
  return {
    notes: data,
  };
};
export default index;
