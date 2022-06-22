import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Home = ({ notes }) => {
  const [open, setOpen] = useState(false);
  const [update_id, setUpdateId] = useState("");
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handle_delete = (id) => {
    let config = {
      method: "DELETE",
      baseURL: API_URL,
      url: `/${id}`,
    };
    axios(config).then((res) => {
      console.log(res);
      Swal.fire({
        title: "Deleted Successful",
        icon: "success",
      });
      location.reload();
    });
  };
  const handle_open_form = (id) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}`,
      url: `/${id}`,
    };
    axios(config).then((res) => {
      setTitle(res.data.data.title);
      setDescription(res.data.data.description);

      setOpen(true);
      setUpdateId(id);
    });
  };
  const handle_update = () => {
    event.preventDefault();
    let ID = update_id;
    let config = {
      method: "PUT",
      baseURL: `${API_URL}`,
      url: `/${ID}`,
      data: {
        title: event.target.titleupdate.value,
        description: event.target.descriptionupdate.value,
      },
    };
    axios(config).then((res) => {
      console.log(res);
      Swal.fire({
        title: "Update Successful",
        icon: "success",
      });
      location.reload();
    });
  };
  const handle_title = () => {
    setTitle(event.target.value);
  };
  const handle_desc = () => {
    setDescription(event.target.value);
  };
  return (
    <React.Fragment>
      <p className="py-5 text-center text-4xl text-gray-700 font-bold">
        My Notes
      </p>
      {open ? (
        <section className="relative">
          <div className="w-10/12 lg:w-4/12  mx-auto py-10">
            <form
              className="bg-gray-700 text-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={() => {
                handle_update();
              }}
            >
              {console.log(description)}
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  for="titleupdate"
                >
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="titleupdate"
                  type="text"
                  placeholder={title}
                  required
                  onChange={handle_title}
                  value={title}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  for="descriptionupdate"
                >
                  Description
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="descriptionupdate"
                  type="text"
                  placeholder={description}
                  required
                  onChange={handle_desc}
                  value={description}
                />
              </div>
              <div className="flex items-center justify-end">
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
      ) : (
        <section className="w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {notes?.map((item) => {
            return (
              <div className="lg:max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-700 text-white">
                <div className="lg:px-6 lg:py-4">
                  {/* <Link href={`/api/notes/${item._id}`}> */}
                  <div className="font-bold text-xl my-2 text-center">
                    {item.title}
                  </div>
                  <p className="text-gray-200 text-base text-center">
                    {item.description}
                  </p>
                  {/* </Link> */}
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between text-sm">
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
      )}
    </React.Fragment>
  );
};

export default Home;
