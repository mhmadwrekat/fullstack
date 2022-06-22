import React from "react";
import axios from "axios";
import Nav from "../component/Nav";
import Swal from "sweetalert2";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const Create = () => {
  const handel_create = () => {
    event.preventDefault();
    let data = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    console.log(data);
    axios.post(API_URL, data).then((res) => {
      console.log(res);
      Swal.fire({
        title: "Note Create Successful",
        icon: "success",
      });
    });
    event.target.reset();
  };
  return (
    <React.Fragment>
      <Nav create={false} />
      <section>
        <div className="w-10/12 lg:w-4/12  mx-auto py-10">
          <form
            className="bg-gray-700 text-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={() => {
              handel_create();
            }}
          >
            <div className="mb-4">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                for="username"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="title"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                for="password"
              >
                Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="description"
                required
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Create;
