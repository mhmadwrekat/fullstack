import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Home = ({ notes }) => {
  const [open, setOpen] = useState(false);
  const [update_id, setUpdateId] = useState("");

  const handle_delete = (id) => {
    let config = {
      method: "DELETE",
      baseURL: `https://fullstack-snowy.vercel.app/api/notes`,
      url: `/${id}`,
    };
    axios(config).then((res) => {
      console.log(res);
      Swal.fire({
        title: "Deleted Successful",
        icon: "success",
      });
    });
  };
  const handle_open_form = (id) => {
    setOpen(true);
    setUpdateId(id);
  };
  const handle_update = () => {
    event.preventDefault();
    let ID = update_id;
    let config = {
      method: "PUT",
      baseURL: `https://fullstack-snowy.vercel.app/api/notes`,
      url: `/${ID}`,
      data: {
        title: event.target.titleupdate.value,
        description: event.target.descriptionupdate.value,
      },
    };
    axios(config).then((res) => {
      console.log(res);
    });
    Swal.fire({
      title: "Update Successful",
      icon: "success",
    });
  };
  return (
    <React.Fragment>
      <p className="py-5 text-center text-4xl text-gray-700 font-bold">
        My Notes
      </p>
      {open ? (
        <section className="relative">
          <div class="w-10/12 lg:w-4/12  mx-auto py-10">
            <form
              class="bg-gray-700 text-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={() => {
                handle_update();
              }}
            >
              <div class="mb-4">
                <label
                  class="block text-gray-100 text-sm font-bold mb-2"
                  for="titleupdate"
                >
                  Title
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="titleupdate"
                  type="text"
                  placeholder="title"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-100 text-sm font-bold mb-2"
                  for="descriptionupdate"
                >
                  Description
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="descriptionupdate"
                  type="text"
                  placeholder="description"
                  required
                />
              </div>
              <div class="flex items-center justify-end">
                <button
                  className="bg-green-600 lg:py-2 px-4 py-1 lg:px-7 rounded-lg text-white font-bold"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : null}
      <section className="w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {notes?.map((item) => {
          return (
            <div class="lg:max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-700 text-white">
              <div class="lg:px-6 lg:py-4">
                {/* <Link href={`/api/notes/${item._id}`}> */}
                <div class="font-bold text-xl mb-2 text-center">
                  {item.title}
                </div>
                <p class="text-gray-200 text-base text-center">
                  {item.description}
                </p>
                {/* </Link> */}
              </div>
              <div class="px-6 pt-4 pb-2 flex justify-between text-sm">
                <button
                  className="bg-green-600 lg:py-2 px-4 py-1 lg:px-7 rounded-lg text-white font-bold"
                  onClick={() => handle_open_form(item._id)}
                >
                  Update
                </button>
                <button
                  onClick={() => handle_delete(item._id)}
                  className="bg-red-600 px-4 py-1 lg:py-2 lg:px-7 rounded-lg text-white font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Home;
