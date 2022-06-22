import React, { useState, useEffect } from "react";
import Nav from "../component/Nav";
import Home from "../component/Home";
import fetch from "isomorphic-unfetch";

export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=59"
  );
  const resp = await fetch("http://localhost:3000/api/notes");
  const { data } = await resp.json();
  return {
    props: {
      notes: data,
    },
  };
}

const index = (props) => {
  return (
    <React.Fragment>
      <Nav create={true} />
      <Home notes={props.notes} />
    </React.Fragment>
  );
};

export default index;
