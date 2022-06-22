import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Nav from "../component/Nav";
import Swal from "sweetalert2";

const Create = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const handel_create = () => {
    event.preventDefault();
    let url = `https://fullstack-snowy.vercel.app/api/notes`;
    let data = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    console.log(data);
    axios.post(url, data).then((res) => {
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
        <div class="w-10/12 lg:w-4/12  mx-auto py-10">
          <form
            class="bg-gray-700 text-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={() => {
              handel_create();
            }}
          >
            <div class="mb-4">
              <label
                class="block text-gray-100 text-sm font-bold mb-2"
                for="username"
              >
                Title
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="title"
                required
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-100 text-sm font-bold mb-2"
                for="password"
              >
                Description
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="description"
                required
              />
            </div>
            <div class="flex items-center justify-end">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
