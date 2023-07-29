import { MainContext } from "@/pages/_app";
import { useGetCategoryQuery } from "@/redux/api/api";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { data } = useGetCategoryQuery(undefined);

  console.log(data, "data");
  const navLinks = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className="text-white">Category</summary>
          <ul className="p-2 ">
            {data?.map((item, i) => (
              <li key={i}>
                <Link href={`/category/${item?._id}`} className="text-black whitespace-nowrap">{item?.title}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <button
          onClick={() => router.push("/pc-builder")}
          className="pc_builder"
        >
          PC Builde
        </button>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar sticky top-0 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content custom text-black mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a
            onClick={() => router.push("/")}
            className=" normal-case cursor-pointer text-white  text-xl"
          >
            IR TELECOM
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
