import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");

  return (
    <>
      <nav className="left-0 fixed top-0  md:block md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between md:w-64 w-full z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <h2 className="mt-2 text-black font-bold">Oliver Space</h2>
          <button
            className={`cursor-pointer text-black opacity-100 px-3 py-1 md:hidden text-xl leading-none bg-dark rounded border border-solid border-transparent ${
              collapseShow != "hidden" ?? "hidden"
            }`}
            type="button"
            onClick={() =>
              setCollapseShow(
                collapseShow === "hidden" ? "bg-white m-2 py-3 px-6" : "hidden"
              )
            }
          >
            {collapseShow === "hidden" ? "Show" : "Hide"} Menu
          </button>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto mt-10 items-center flex-1 rounded " +
              collapseShow
            }
          >
            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-xs uppercase py-3 font-bold block "
                  to="/"
                >
                  Instructions
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-xs uppercase py-3 font-bold block "
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="items-center">
                <a
                  className="text-xs uppercase py-3 font-bold block "
                  href="https://isaachardy.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Another Cool Link
                </a>
              </li>
              <li className="items-center">
                <a
                  className="text-xs uppercase py-3 font-bold block "
                  href="https://www.linkedin.com/in/isaachardy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
