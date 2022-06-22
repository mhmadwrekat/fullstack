import React from "react";
import Head from "next/head";
import Link from "next/link";

const Nav = ({ create }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </Head>
      <section className="bg-gray-700 w-full py-3 flex justify-between">
        <div className=" mx-3 lg:mx-20 text-white text-3xl font-bold">
          Notes
        </div>
        <div className=" mx-3 lg:mx-20">
          {create ? (
            <Link href="/Create">
              <button className="rounded-lg bg-blue-500 px-7 py-2 text-base font bold">
                Create Note
              </button>
            </Link>
          ) : (
            <Link href="/">
              <button className="rounded-lg bg-blue-500 px-7 py-2 text-base font bold">
                Back
              </button>
            </Link>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Nav;
