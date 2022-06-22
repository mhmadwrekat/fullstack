import React, { useState, useEffect } from "react";
import Nav from "../component/Nav";
import Home from "../component/Home";
import fetch from "isomorphic-unfetch";

const index = ({ notes }) => {
  // const [notes, setNotes] = useState();
  // const get_notes = async () => {
  //   const resp = await fetch("http://3000/api/notes");
  //   const { data } = await resp.json();
  //   setNotes(data);
  // };

  // useEffect(() => {
  //   // get_notes();
  // }, [notes]);
  console.log("NNNNNNNNN ->> ", notes);
  return (
    <React.Fragment>
      <Nav create={true} />
      <Home notes={notes} />
    </React.Fragment>
  );
};
index.getInitialProps = async () => {
  const resp = await fetch("https://fullstack-snowy.vercel.app/api/notes");
  const { data } = await resp.json();
  return {
    notes: data,
  };
};
export default index;
/*
import React, { useState, useEffect } from "react";
import Nav from "../component/Nav";
import Home from "../component/Home";
import axios from "axios";

const index = () => {
  const [notes, setNotes] = useState();

  const get_notes = () => {
    axios.get(`https://fullstack-snowy.vercel.app/api/notes`).then((res) => {
      setNotes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    get_notes();
  }, [notes]);
  return (
    <React.Fragment>
      <Nav create={true} />
      <Home notes={notes} />
    </React.Fragment>
  );
};

export default index;

*/
